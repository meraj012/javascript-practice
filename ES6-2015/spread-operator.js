// spread operator with array
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [...arr1, 6, 7, 8, 9, 10];

console.log(arr2);

//spread operator with function arguments
function sum(a, b, c, d, e = 20) {
  return a + b + c + d + e;
}
console.log(sum(...arr1));
