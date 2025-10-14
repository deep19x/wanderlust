if(process.env.NODE_ENV != "production"){
    require("dotenv").config();
}

const express = require("express");
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const ejsMate = require("ejs-mate");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const localStrategy = require("passport-local");
const User = require("./models/user.js");

const wrapAsync = require("./utils/wrapAsync.js");
const expressError = require("./utils/expressError.js");

// Routes
const listingRouter = require('./routes/listing.js');
const reviewRouter = require('./routes/review.js');
const userRouter = require('./routes/user.js');

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Connect to DB
const dbUrl = process.env.ATLASDB_URL;

main().then(() => console.log("Connected to DB"))
.catch(err => console.log(err));

async function main() {
    await mongoose.connect(dbUrl);
}

const store = MongoStore.create({
    mongoUrl:dbUrl,
    crypto:{
        secret:process.env.SECRET,
    },
    touchAfter:24*3600,
});

store.on("error",(err)=>{
    console.log("Error in Mongo Session Store",err);
});

// Session & Flash
const sessionOptions = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false, // safer
    cookie: {
        httpOnly: true,
        expires: Date.now() + 7*24*60*60*1000,
        maxAge: 7*24*60*60*1000,
    }
};

app.use(session(sessionOptions));
app.use(flash());

//passport implementation
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Flash middleware for templates
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currentUser = req.user;
    next();
});


app.use("/listings", listingRouter);
app.use("/listings/:id/review", reviewRouter);
app.use("/",userRouter);

// 404 handler
app.use((req, res, next) => {
    next(new expressError(404, "Page Not Found!"));
});

// Error handler
app.use((err, req, res, next) => {
    const { status = 500, message = "Something Went Wrong!" } = err;
    res.status(status).render("error.ejs", { err });
});

// Start server
app.listen(8080, () => {
    console.log("App is listening on port 8080!");
});
