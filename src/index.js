module.exports = function zeros(expression) {
  let factorialsInExpression = expression.split('*');

  function zerosInEach(factorial) {
    let factorialNumber = parseInt(factorial, 10);
    let count = 0;
    if (factorial.indexOf('!!') === -1) {
      for (let i = 5; factorialNumber / i >= 1; i *= 5) {
        count += factorialNumber / i;
      }
      return Math.floor(count);
    }
    else {
      if (factorialNumber % 2 != 0) return 0;
      for (let i = 10; factorialNumber / i >= 1; i *= 5) {
        count += factorialNumber / i;
      }
      return Math.floor(count);
    }
  }

  factorialsInExpression = factorialsInExpression.map(value => zerosInEach(value));
 
  return factorialsInExpression.reduce((a, b) => a + b)
}
