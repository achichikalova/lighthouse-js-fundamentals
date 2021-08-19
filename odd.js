function isOdd(num) {
  console.log(Number.isInteger(num));
  if (!Number.isInteger(num)) {
    return "Your value is not an integer or not a number at all. Please choose a whole number to check."
  } else if (Number.isInteger(num) && num % 2 === 0) {
    return false;
  } else {
    return true;
  }
}

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));
console.log(isOdd('h'));
console.log(isOdd(15.2));