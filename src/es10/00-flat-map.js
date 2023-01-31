// flat
const array = [1,2,3,4,[1,2,3,4,5,7,[1,4,7,4,7,9]]];
console.log(array.flat(3));

// flatmap

const array2 = [1,2,3,4,6,9];
console.log(array2.flatMap(v=>[v,v*2]));