// Create a function that takes an integer as an argument and returns "Even" for
// even numbers or "Odd" for odd numbers.

function even_or_odd(value) {
  if (value % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

theResult = even_or_odd(5);
document.write(theResult);

document.write("<br>")

function even_or_odd(value) {
  return value % 2 == 0 ? "Even" : "Odd";
}

theResult = even_or_odd(6);
document.write(theResult);
