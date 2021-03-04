const showTag = function (arg1, arg2, arg3) {
  console.log("this :", this);
  console.log("this.tag :", this.tag);
//   console.log(arg1, arg2, arg3);
};

const mango = {
  tag: "Mango",
};

const poly = {
  tag: "Poly",
};

// console.dir(showTag);

// showTag();

// mango.show = showTag;
// mango.show();

// showTag.call(mango, 1, 2, 3);
// showTag.call(poly, 5, 6, 7);

// showTag.apply(mango, [3, 4, 5]);
// showTag.apply(poly, [9, 8, 7]);

const showMango = showTag.bind(mango);
showMango();

const showPoly = showTag.bind(poly);
showPoly();


// showTag();