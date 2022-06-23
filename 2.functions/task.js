// Задание 1
function getArrayParams(arr) {
  let min = arr[0], max = arr[0], sum = 0, avg;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      } else if (arr[i] < min) {
        min = arr[i];
      }
      sum += arr[i];
  }
  avg = Number ((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  
  for (let i = 0; i < arrOfArr.length; i++) {
    let sumArr = func(arrOfArr[i]);
    if (sumArr > max) {
      max = sumArr;
    } 
  }
 
  return max;
}

// Задание 3
function worker2(arr) {
  let max = arr[0];
  let min = arr[0];
  let difference = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }

  
  difference = Math.abs(max - min);
  return difference;
}
