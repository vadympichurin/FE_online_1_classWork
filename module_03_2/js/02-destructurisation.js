
// const hotel = {
//     name: 'Resort',
//     stars: 5,
//     capacity: 1000,
//     gritting(){
//         console.log('Hello!!!');
//     },
// };

// const { name: hotelName, stars = 0, capacity, gritting } = hotel;

// console.log('Name : ', hotelName);
// console.log('Stars : ', stars);
// console.log('Cap : ', capacity);

// // gritting();

// console.log(hotel);

// console.log();

// fn

const hotel = {
    name: 'Resort',
    stars: 5,
    capacity: 1000,
    gritting(){
        console.log('Hello!!!');
    },
};


// const getHotelName = function({ name, capacity = 0, stars }){

//     // const { name, capacity, stars } = hotelInfo;

//     console.log(name);
//     console.log(capacity);
//     console.log(stars);
// };

// getHotelName(hotel);


/*
    Глубокая деструктуризация
*/ 
const profile = {
    name: 'Michael Jacson',
    tag: 'mjacson',
    location: 'USA, Philadelfia',
    avatar: 'https://i.pravatar.cc/400?img=4',
    status: {
        followers: 2345,
        views: 123456,
        likes: 765,
    },
};


// const { name, tag, location, avatar, status: {followers, likes, views} } = profile;

const {name, location, ...props} = profile;

console.log(name, location);
console.log(props);

// const { followers, views, likes } = status;

// console.log(likes);


//  arrays

// const { name, tag } = profile;


const rgb = [255, 123, 77];

// const red = rgb[0];
// const green = rgb[1];
// const blue = rgb[2];

// const [, , blue] = rgb;

// console.log( blue);