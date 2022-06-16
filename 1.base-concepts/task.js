"use strict";
function solveEquation(a, b, c) {
  let arr = [];  // код для задачи №1 писать здесь
  let D = b**2 - 4*a*c;
  if (D < 0) {
    return arr;
  } else if (D == 0) {
    arr = [-b/(2*a)];
    return arr;
  } else {
    arr = [(-b + Math.sqrt(D) )/(2*a), (-b - Math.sqrt(D) )/(2*a)]
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;  // код для задачи №2 писать здесь
   if (isNaN(percent)) {
    return (`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`);
  }
   if (isNaN(contribution)) {
    return (`Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`);
  }
  if (isNaN(amount)) {
    return (`Параметр "Общая стоимость" содержит неправильное значение "${amount}"`);
  }
  
let dateStart = Date.now ();
date= +date;
let numberOfMonths = Math.trunc((date - dateStart)/1000/60/60/24/30);
let payCredit = (amount - contribution) * ((percent/1200) + ((percent/1200) / (((1 + (percent/1200))**numberOfMonths) - 1)));
totalAmount = Number((payCredit*numberOfMonths).toFixed(2));
  
return totalAmount;
}
