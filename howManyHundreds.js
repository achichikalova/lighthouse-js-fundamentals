function howManyHundreds(num) {
  let result;
  if (num < 100) {
    result = 0;
  } else {
    result = (num - (num % 100)) / 100;
  }
  return result;
}
console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);