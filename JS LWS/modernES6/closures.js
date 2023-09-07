const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sum = 0;

arr.forEach(function (val, index, arr) {
  sum += val;
});
console.log(sum);
