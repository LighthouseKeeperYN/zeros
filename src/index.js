module.exports = function zeros(expression) {
  expression = expression.split('*').map(value => {
    let arr = [];
    let m = value.indexOf('!!') === -1 ? 1 : 2;
    value = parseInt(value, 10);

    for (; value > 0; value -= m) arr.push(value);
    return arr;
  });

  let twos = 0;
  let fives = 0;

  expression.forEach(value => {
    value.forEach(value => {
      for (let num = value; num % 2 === 0; num /= 2) twos++;
      for (let num = value; num % 5 === 0; num /= 5) fives++;
    });
  });


  return fives > twos ? twos : fives;
}
