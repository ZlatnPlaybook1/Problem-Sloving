// Write afunction called repeatStr which repeats the given string string exactly n times.
// repeatStr(6, "I")  // "IIIIII"
// repeatStr(5, "Hello") // "HeZZoHeZZoHeZZoHeZZoHeZZo"

function repeatstr(n, s) {
  let MyNewString = "";
  for (let i = 0; i < n; i++) {
    MyNewString += s;
  }
  return MyNewString;
}
TheResult = repeatstr(5, "Hello");
TheResult2 = repeatstr(6 , "I")

document.write(TheResult);
document.write("<br>");
document.write(TheResult2);


