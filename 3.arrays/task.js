function compareArrays(arr1, arr2) {
  let result;
  result = arr1.length === arr2.length && arr1.every((n, i) => n === arr2[i]);
  // Ваш код

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;
  resultArr = arr.filter((item) => item > 0).filter((item) => item % 3 === 0).map((item) => item*10); 
 
  return resultArr; // array
}
