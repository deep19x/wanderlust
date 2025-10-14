/**
 * Sample Listing Data with assigned categories.
 * * Note: Mongoose ObjectId wrappers have been removed for clean JavaScript export.
 * The categories are assigned based on the listing's title, description, and location,
 * matching the allowed enum values: ["Mountain", "Island", "Greenery", "Snow", "Desert", "Beach", "Urban"].
 */

const sampleListings = [
    {
        _id: '68ec0c11e691cda7dd5ee325',
        title: 'Cozy Beachfront Cottage',
        description: 'Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.',
        image: {
            url: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
            filename: 'listingimage'
        },
        price: 1500,
        location: 'Malibu',
        country: 'United States',
        reviews: [ '68ec0d66fe951be0aff21ce3' ], // Placeholder ID
        owner: '68e7eae7fdc5ab9953d5cf97',     // Placeholder ID
        lat: 34.035591,
        lng: -118.689423,
        category: 'Beach'
    },
    {
        _id: '68ec0c11e691cda7dd5ee326',
        title: 'Modern Loft in Downtown',
        description: 'Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!',
        image: {
            url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
            filename: 'listingimage'
        },
        price: 1200,
        location: 'New York City',
        country: 'United States',
        reviews: [],
        owner: '68e7eae7fdc5ab9953d5cf97',
        lat: 40.7127281,
        lng: -74.0060152,
        category: 'Urban',
    },
    {
        _id: '68ec0c11e691cda7dd5ee327',
        title: 'Mountain Retreat',
        description: "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
        image: {
            url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
            filename: 'listingimage'
        },
        price: 1000,
        location: 'Aspen',
        country: 'United States',
        reviews: [],
        owner: '68e7eae7fdc5ab9953d5cf97',
        lat: 39.1911128,
        lng: -106.82356,
        category: 'Mountain'
    },
    {
        _id: '68ec0c11e691cda7dd5ee328',
        title: 'Historic Villa in Tuscany',
        description: 'Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.',
        image: {
            url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
            filename: 'listingimage'
        },
        price: 2500,
        location: 'Florence',
        country: 'Italy',
        reviews: [],
        owner: '68e7eae7fdc5ab9953d5cf97',
        lat: 43.7697955,
        lng: 11.2556404,
        category: 'Greenery'
    },
    {
        _id: '68ec0c11e691cda7dd5ee329',
        title: 'Secluded Treehouse Getaway',
        description: "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
        image: {
            url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
            filename: 'listingimage'
        },
        price: 800,
        location: 'Portland',
        country: 'United States',
        reviews: [],
        owner: '68e7eae7fdc5ab9953d5cf97',
        lat: 45.5202471,
        lng: -122.674194,
        category: 'Greenery'
    },
    {
        _id: '68ec0c11e691cda7dd5ee32a',
        title: 'Beachfront Paradise',
        description: 'Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.',
        image: {
            url: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
            filename: 'listingimage'
        },
        price: 2000,
        location: 'Cancun',
        country: 'Mexico',
        reviews: [],
        owner: '68e7eae7fdc5ab9953d5cf97',
        lat: 21.1527467,
        lng: -86.8425761,
        category: 'Beach'
    },
    {
        _id: '68ec0c11e691cda7dd5ee32b',
        title: 'Rustic Cabin by the Lake',
        description: 'Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.',
        image: {
            url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
            filename: 'listingimage'
        },
        price: 900,
        location: 'Lake Tahoe',
        country: 'United States',
        reviews: [],
        owner: '68e7eae7fdc5ab9953d5cf97',
        lat: 39.0885405,
        lng: -120.0503528,
        category: 'Greenery' // Lake Tahoe offers a strong element of Greenery/Nature
    },
    {
        _id: '68ec0c11e691cda7dd5ee32c',
        title: 'Luxury Penthouse with City Views',
        description: 'Indulge in luxury living with panoramic city views from this stunning penthouse apartment.',
        image: {
            url: 'https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
            filename: 'listingimage'
        },
        price: 3500,
        location: 'Los Angeles',
        country: 'United States',
        reviews: [],
        owner: '68e7eae7fdc5ab9953d5cf97',
        lat: 34.0536909,
        lng: -118.242766,
        category: 'Urban'
    },
    {
        _id: '68ec0c11e691cda7dd5ee32d',
        title: 'Ski-In/Ski-Out Chalet',
        description: 'Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.',
        image: {
            url: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
            filename: 'listingimage'
        },
        price: 3000,
        location: 'Verbier',
        country: 'Switzerland',
        reviews: [],
        owner: '68e7eae7fdc5ab9953d5cf97',
        lat: 46.0961011,
        lng: 7.2286765,
        category: 'Snow'
    },
    {
        _id: '68ec0c11e691cda7dd5ee32e',
        title: 'Safari Lodge in the Serengeti',
        description: 'Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.',
        image: {
            url: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
            filename: 'listingimage'
        },
        price: 4000,
        location: 'Serengeti National Park',
        country: 'Tanzania',
        reviews: [],
        owner: '68e7eae7fdc5ab9953d5cf97',
        lat: -2.3712909,
        lng: 34.6983828,
        category: 'Greenery'
    },
    {
        _id: '68ec0c11e691cda7dd5ee32f',
        title: 'Historic Canal House',
        description: "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
        image: {
            url: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
            filename: 'listingimage'
        },
        price: 1800,
        location: 'Amsterdam',
        country: 'Netherlands',
        reviews: [],
        owner: '68e7eae7fdc5ab9953d5cf97',
        lat: 52.3730796,
        lng: 4.8924534,
        category: 'Urban'
    },
    {
        _id: '68ec0c11e691cda7dd5ee330',
        title: 'Private Island Retreat',
        description: 'Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.',
        image: {
            url: 'https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
            filename: 'listingimage'
        },
        price: 10000,
        location: 'Fiji',
        country: 'Fiji',
        reviews: [],
        owner: '68e7eae7fdc5ab9953d5cf97',
        lat: -18.1239696,
        lng: 179.0122737,
        category: 'Island'
    },
    {
        _id: '68ec0c11e691cda7dd5ee331',
        title: 'Charming Cottage in the Cotswolds',
        description: 'Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.',
        image: {
            url: 'https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2hlJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
            filename: 'listingimage'
        },
        price: 1200,
        location: 'Cotswolds',
        country: 'United Kingdom',
        reviews: [],
        owner: '68e7eae7fdc5ab9953d5cf97',
        lat: 51.7489426,
        lng: -0.2303335,
        category: 'Greenery'
    },
    {
        _id: '68ec0c11e691cda7dd5ee332',
        title: 'Historic Brownstone in Boston',
        description: 'Step back in time in this elegant historic brownstone located in the heart of Boston.',
        image: {
            url: 'https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
            filename: 'listingimage'
        },
        price: 2200,
        location: 'Boston',
        country: 'United States',
        reviews: [],
        owner: '68e7eae7fdc5ab9953d5cf97',
        lat: 42.3554334,
        lng: -71.060511,
        category: 'Urban'
    },
    {
        _id: '68ec0c11e691cda7dd5ee333',
        title: 'Beachfront Bungalow in Bali',
        description: 'Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.',
        image: {
            url: 'https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
            filename: 'listingimage'
        },
        price: 1800,
        location: 'Bali',
        country: 'Indonesia',
        reviews: [],
        owner: '68e7eae7fdc5ab9953d5cf97',
        lat: -8.2271303,
        lng: 115.1919203,
        category: 'Beach'
    },
    {
        _id: '68ec0c11e691cda7dd5ee334',
        title: 'Mountain View Cabin in Banff',
        description: 'Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.',
        image: {
            url: 'https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
            filename: 'listingimage'
        },
        price: 1500,
        location: 'Banff',
        country: 'Canada',
        reviews: [],
        owner: '68e7eae7fdc5ab9953d5cf97',
        lat: 51.175076,
        lng: -115.5720773,
        category: 'Mountain'
    },
    {
        _id: '68ec0c11e691cda7dd5ee335',
        title: 'Art Deco Apartment in Miami',
        description: 'Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.',
        image: {
            url: 'https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
            filename: 'listingimage'
        },
        price: 1600,
        location: 'Miami',
        country: 'United States',
        reviews: [],
        owner: '68e7eae7fdc5ab9953d5cf97',
        lat: 25.7741728,
        lng: -80.19362,
        category: 'Urban'
    },
    {
        _id: '68ec0c11e691cda7dd5ee336',
        title: 'Tropical Villa in Phuket',
        description: 'Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.',
        image: {
            url: 'https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
            filename: 'listingimage'
        },
        price: 3000,
        location: 'Phuket',
        country: 'Thailand',
        reviews: [],
        owner: '68e7eae7fdc5ab9953d5cf97',
        lat: 7.9366015,
        lng: 98.3529292,
        category: 'Island'
    },
    {
        _id: '68ec0c11e691cda7dd5ee337',
        title: 'Historic Castle in Scotland',
        description: 'Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.',
        image: {
            url: 'https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
            filename: 'listingimage'
        },
        price: 4000,
        location: 'Scottish Highlands',
        country: 'United Kingdom',
        reviews: [],
        owner: '68e7eae7fdc5ab9953d5cf97',
        lat: 56.8,
        lng: -5,
        category: 'Mountain'
    },
    {
        _id: '68ec0c11e691cda7dd5ee338',
        title: 'Desert Oasis in Dubai',
        description: 'Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.',
        image: {
            url: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
            filename: 'listingimage'
        },
        price: 5000,
        location: 'Dubai',
        country: 'United Arab Emirates',
        reviews: [],
        owner: '68e7eae7fdc5ab9953d5cf97',
        lat: 25.0742823,
        lng: 55.1885387,
        category: 'Desert'
    }
];


module.exports = { data: sampleListings };