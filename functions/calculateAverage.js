export function calculateAverage(a, b, c) {
  const average = (Number(a) + Number(b) + Number(c)) / 3; // a + b + c / 3 выдаёт неверный результат, видимо потому что принимает все три значения за целую строку.
  return average.toFixed(2);
}
