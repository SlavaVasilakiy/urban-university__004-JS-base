import { greeting } from './functions/greeting.js';
import { calculateFallDistance } from './functions/calculateFallDistance.js';
import { celsiusToFahrenheit } from './functions/celsiusToFahrenheit.js';
import { calculateAverage } from './functions/calculateAverage.js';
import { concatStrings } from './functions/concatStrings.js';

console.log(greeting('Slava'));
// ===========================================================================================================================================

console.log(`Температура в градусах Фаренгейта: ${celsiusToFahrenheit(36.6)}`);
// ===========================================================================================================================================

const time = 5;
const distance = calculateFallDistance(time);
console.log(`Объект пролетел ${distance} метров за ${time} секунд.`);
// ===========================================================================================================================================

const average = calculateAverage(2, 2, 2);
console.log(`Среднее значение: ${average}`);
// ===========================================================================================================================================

const result = concatStrings('Hello', 'World');
console.log(result);
