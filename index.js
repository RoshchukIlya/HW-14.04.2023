// 1
const arr = [3, 5, 9, 2, 17, 5, 2, 5, 3];
const sumArr = arr.reduce(function (a, b) {
  return a + b
});

// 2
function findArrMin(arr) {
  return Math.min(...arr)
};
const minArr = findArrMin(arr);

// 3
function findArrMax(arr) {
  return Math.max(...arr)
};
const maxArr = findArrMax(arr);

// 4
function findArrIndex(arr, value) {
  return arr.indexOf(value)
};
const index9 = findArrIndex(arr, 9);

// 5
function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}
/* new Set(arr) создает новый Set (набор) из элементов массива arr. Set хранит только уникальные значения, так что все дубликаты будут автоматически удалены.
   Array.from() преобразует Set обратно в массив. */
const arr2 = removeDuplicates(arr);

// 6
const arrSortUp = arr.sort((a, b) => a - b);

// 7
const arrSortDown = arr.sort((a, b) => b - a);

// 8
const arrAverage = arr.reduce((a, b) => (a + b)) / arr.length;

// 9
const arrCondition = arr.every((a) => /* УСЛОВИЕ: */ a > 0);

// 10
const arrStroke = ['5', '8', '256', '85'];
const arrNumber = arrStroke.map(a => Number(a));