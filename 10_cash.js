const cashFunction = (fn) => {
  const cash = {};

  return (n) => {
    if (cash[n]) {
        console.log('cash')
      return cash[n];
    } else {
        console.log('fn')

      let result = fn(n);
      cash[n] = result;
      return result;
    }
  };
};

const factorial = (n) => {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

const cashFactorial = cashFunction(factorial)

cashFactorial(2)
cashFactorial(2)
cashFactorial(3)
cashFactorial(4)
cashFactorial(5)
cashFactorial(3)