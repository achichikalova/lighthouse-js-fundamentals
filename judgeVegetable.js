const judgeVegetable = function (vegetables, metric) {
  let highMetric = 0;
  let winnerName;
  for(let i = 0; i < vegetables.length; i++) {
    if (highMetric < vegetables[i][metric]) {
      highMetric = vegetables[i][metric];
      winnerName = vegetables[i].submitter;
    }
  }  
  return winnerName;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 100,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 20,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 40,
    plumpness: 3
  }
]

const metric = 'redness';

console.log(judgeVegetable(vegetables, metric));