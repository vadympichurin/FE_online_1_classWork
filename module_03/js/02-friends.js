// Наши друзья

// const friends = [
//   { name: "Mango", isOnline: true },
//   { name: "Poly", isOnline: false },
//   { name: "Ajax", isOnline: true },
//   { name: "Kiwi", isOnline: false },
// ];
// console.table(friends);
// const nameToFind = 'Poly';


/*
 * Ищем друга по имени
 */

//  const findFriend = function(allFriends, searchName){
//     for(const friend of allFriends) {
//       if(friend.name === searchName) {
//         return 'Нашли друга!!!'; 
//       }
//     }
//  };

//  console.log(findFriend(friends, nameToFind)); 

//  for(const friend of friends){
//    console.log(friend);

//    if (friend.name === nameToFind) {
//      console.log('Нашли !!!!');
//      break;
//    }
//  }

/*
 * Получаем имена всех друзей
 */

//  const getAllNames = function(allFriends){
//    let freindsNames = [];
//    for(const friend of allFriends){
//     freindsNames.push(friend.name);
//    }

//    return freindsNames;
//  };

//  console.log(getAllNames(friends));

/*
 *  Получаем имена друзей которые онлайн
 */

const friends = [
  { name: "Mango", isOnline: true },
  { name: "Poly", isOnline: false },
  { name: "Ajax", isOnline: true },
  { name: "Kiwi", isOnline: false },
];

 const getOnlineFriends = function(allFriends){
   let onlineFriends = [];
   for(const friend of friends){
      if(friend.isOnline){
        onlineFriends.push(friend.name);
      }
   }
   return onlineFriends;
 };

 console.log(getOnlineFriends(friends));

 const getOfflineFriends = function(allFriends){
   let offline = [];
   for(const friend of allFriends){
     if(!friend.isOnline){
       offline.push(friend.name);
     }
   }
// &&
// ||
// !


   return offline;
 };

 console.log(getOfflineFriends(friends));