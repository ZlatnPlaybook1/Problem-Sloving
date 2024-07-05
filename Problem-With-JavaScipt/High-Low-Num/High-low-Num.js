// Sum all the numbers of a given array ( cq. list ), except the highest and
// the lowest element ( by value, not by index! ).
// The highest or lowest element respectively is a single element at each
// edge, even if there are more than one with the same value.
// Mind the input validation.
// Example {6 , 2 , 1 , 8 , 10 }  => 16
//         {1, 1 , 11 , 2 ,3 }    => 6
function sumWithoutTheHighestAndLowestNumber(array) {
  if (array == null) return 0;

  let MaxNumber = Math.max(...array);
  let MinNumber = Math.min(...array);
  let filterArray = array
    .filter((x) => x !== MaxNumber && x !== MinNumber)
    .reduce((acc, current) => acc + current, 0);
  return filterArray;
}

let TheSum = sumWithoutTheHighestAndLowestNumber([6, 2, 1, 8, 10]);
document.write(TheSum);

document.write("<br>");

function sumWithoutTheHighestAndLowestNumberSorted(array) {
  if (array == null || array.length < 3) return 0;

  let sortedArray = array.sort((a, b) => a - b).slice(1, -1);
  let sum = sortedArray.reduce((acc, current) => acc + current, 0);
  return sum;
}

let theSum2 = sumWithoutTheHighestAndLowestNumberSorted([1, 1, 11, 2, 3]);
document.write(theSum2);
