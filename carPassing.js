const carPassing = function (cars, speed) {
  let newObj = {
    time: 0,
    speed: 0
  };
  newObj.time = Date.now();
  newObj.speed = speed;
  let newCars = cars.concat(newObj);
  return newCars;
}

const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38;

console.log(carPassing(cars, speed));