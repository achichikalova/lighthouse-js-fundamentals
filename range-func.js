function range (start, end, step) {

  let result = [];

  if(start === undefined && end === undefined && 
    step === undefined && start > end && step <= 0) {
    return result;
  }

  // for (let i = start; i <= end; i += step){
  //   result.push(i);
  // }

  while(start <= end) {
    result.push(start);
    start += step;
  }
  return result;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(undefined, 10, 4));
console.log(range(30, 5, 2));
console.log(range(0, 8, 2));
console.log(range(-9, 3, 3));