import { greeting } from './functions/greeting.js';
import { celsiusToFahrenheit } from './functions/celsiusToFahrenheit.js';
import { calculateFallDistance } from './functions/calculateFallDistance.js';
import { calculateAverage } from './functions/calculateAverage.js';
import { concatStrings } from './functions/concatStrings.js';

const userNameElement = document.querySelector('#userName');
const greetUserButton = document.querySelector('.greetUser__button');

greetUserButton.addEventListener('click', () => {
  const userName = userNameElement.value;
  if (userName != '') {
    alert(greeting(userName));
  } else {
    alert('Введите имя');
  }
});
// ===========================================================================================================================================

const celsiusElement = document.querySelector('#celsius');
const celsiusToFahrenheitButton = document.querySelector(
  '.celsiusToFahrenheit__button',
);
const celsiusToFahrenheitResultElement = document.querySelector(
  '.celsiusToFahrenheit__result',
);

celsiusToFahrenheitButton.addEventListener('click', () => {
  const celsiusValue = celsiusElement.value;
  if (celsiusValue != '') {
    const result = celsiusToFahrenheit(celsiusValue);
    celsiusToFahrenheitResultElement.innerHTML = `<b>Результат:<b/> ${result}`;
  } else {
    alert('Введите температуру в градусах Цельсия');
  }
});
// ===========================================================================================================================================

const calculateFallDistanceTimeElement = document.querySelector('#time');
const calculateFallDistanceButton = document.querySelector(
  '.calculateFallDistance__buttont',
);
const calculateFallDistanceResultElement = document.querySelector(
  '.calculateFallDistance__result',
);

calculateFallDistanceButton.addEventListener('click', () => {
  const timeValue = calculateFallDistanceTimeElement.value;
  if (timeValue != '') {
    const result = calculateFallDistance(timeValue);
    calculateFallDistanceResultElement.innerHTML = `<b>Результат:<b/> ${result}`;
  } else {
    alert('Введите время падения объекта в секундах');
  }
});
// ===========================================================================================================================================

const calculateAverageFirstElement = document.querySelector('#firstNumber');
const calculateAverageSecondElement = document.querySelector('#secondNumber');
const calculateAverageThirdElement = document.querySelector('#thirdNumber');
const calculateAverageButton = document.querySelector(
  '.calculateAverage__button',
);
const calculateAverageResultElement = document.querySelector(
  '.calculateAverage__result',
);

calculateAverageButton.addEventListener('click', () => {
  const firstNumber = calculateAverageFirstElement.value;
  const secondNumber = calculateAverageSecondElement.value;
  const thirdNumber = calculateAverageThirdElement.value;
  if (firstNumber != '' && secondNumber != '' && thirdNumber != '') {
    console.log(calculateAverage(firstNumber, secondNumber, thirdNumber));
    const result = calculateAverage(firstNumber, secondNumber, thirdNumber);
    calculateAverageResultElement.innerHTML = `<b>Результат:<b/> ${result}`;
  } else {
    alert('Введите три числа');
  }
});
// ===========================================================================================================================================

const concatStringsFirstElement = document.querySelector('#firstString');
const concatStringsSecondElement = document.querySelector('#secondString');
const concatStringsButton = document.querySelector('.concatStrings__button');
const concatStringsResultElement = document.querySelector(
  '.concatStrings__result',
);

concatStringsButton.addEventListener('click', () => {
  const firstString = concatStringsFirstElement.value;
  const secondString = concatStringsSecondElement.value;
  if (firstString != '' && secondString != '') {
    concatStringsResultElement.innerHTML = `<b>Результат:<b/> ${concatStrings(
      firstString,
      secondString,
    )}`;
  } else {
    alert('Введите две строки');
  }
});
