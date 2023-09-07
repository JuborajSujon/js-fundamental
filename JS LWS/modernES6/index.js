let marks = [4, 5, 7, 9, 10, 3];

lessThanFive = false;

for (let index = 0; index < marks.length; index++) {
  if (marks[index] < 5) {
    lessThanFive = true;
    break;
  }
}
console.log(lessThanFive);
