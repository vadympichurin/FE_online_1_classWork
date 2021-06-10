const user = {
  name: "Mango",
  hobby: "Basketball",
  age: 16,
  mood: "happy",
  pets: [
    {
      type: "dog",
      name: "Jerry",
    },
    {
      type: "cat",
      name: "Tom",
    },
  ],
};



console.log('user : ', user);
console.log('user type : ', typeof user);


const stringUser = JSON.stringify(user);

console.log('stringUser : ', stringUser);
console.log('stringUser typeof : ', typeof stringUser);

const newUser = JSON.parse(stringUser);

console.log('newUser : ', newUser);
console.log('newUser type : ', typeof newUser);


