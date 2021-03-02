  //  ================= lexical env ============

/*
    Global env - создается при исполнении файла скрипта
    Record: {}
    Parent: null
*/

  const x = 10;

/*
    Global env
    Record: {x: 10}
    Parent: null
*/


/*
  Записывается в момент объявления функции
  [[Environment]] = Global env
*/
  const fn = function(z){
    /*
    * Fn env - создается в момень вызова функции
    * Record: {z: 30}
    * Parent: Global env
    */

    const x = 100;

     /*
    * Fn env
    * Record: {z: 30, x: 100}
    * Parent: Global env
    */

    return x + y + z; // 100 + 20 + 30 = 150
  }

/*
    Global env
    Record: {x: 10, fn: function}
    Parent: null
*/



const y = 20;

/*
    Global env
    Record: {x: 10, fn: function, y: 20}
    Parent: null
*/

fn(30);

////////////
  

  console.log(fn(30)); // 150

  fn(50);