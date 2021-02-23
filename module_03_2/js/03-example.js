const profile = {
  name: "Michael Jacson",
  tag: "mjacson",
  // location: "USA, Philadelfia",
  location: undefined,
  // avatar: "https://i.pravatar.cc/400?img=4",
  avatar: undefined,
  stats: {
    followers: 2345,
    views: 123456,
    likes: 765,
  },
};

const makeProfileMakeup = function ({
  name,
  tag,
  location = 'Planet',
  avatar = 'https://i.pravatar.cc/400?img=6',
  stats: { followers, views, likes },
}) {
  return `
    <div>
        <img src="${avatar}" alt="user avatar">
        <p>${name} <span>@${tag}</span></p>
     <p>Location: ${location}</p>
     <ul>
        <li>Folowers: ${followers}</li>
        <li>Views: ${views}</li>
        <li>Likes: ${likes}</li>
     </ul>
     </div>
  `;
};

const makeup = makeProfileMakeup(profile);
console.log(makeup);

document.body.insertAdjacentHTML("afterbegin", makeup);


let a = 0;

a = 5; // norm

// let a = 9; // error

const b = 6;
// b = 7; // error

console.log('var :', c);
var c = 5;
console.log('var :', c);

var c = 'hello'; // norm
console.log('var :', c);

c = 'popopipo';
console.log('var :', c);


