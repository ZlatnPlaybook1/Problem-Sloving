// You get an array of numbers, return the sum of all of the positives ones.
// Example => [1 , -4 , 7 ,12 ] => 1 + 7 +12  = 20
// Note: if there is nothing to sum, the sum is default to 0 .

function SumPositive(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

TheResult = SumPositive([1, 6, -5, -7, -3, 8]);
document.write(TheResult);

document.write("<br>");
// Another Solution

function SumPositive(arr) {
  return arr.filter((x) => x > 0).reduce((acc, current) => acc + current, 0);
}
TheResult = SumPositive([1, 6, -5, -7, -3, 8, 10]);
document.write(TheResult);
