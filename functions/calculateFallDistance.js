export function calculateFallDistance(timeInSeconds) {
  const g = 9.8;
  const distance = 0.5 * g * Math.pow(timeInSeconds, 2);
  return distance.toFixed(2);
}
