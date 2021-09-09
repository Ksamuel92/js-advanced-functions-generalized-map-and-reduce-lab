// Add your functions here

function map (array, fn) {
  const newArray = []
  for(const element of array) {
    newArray.push(fn(element));
  }
  return newArray;
}

function reduce (array, fn, startingValue){
  let runningTotal = startingValue;
  let memo = fn();
  for(const element of array) {
    runningTotal += fn(element, memo)
  }
  return runningTotal;
}