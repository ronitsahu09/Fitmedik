const validateDecimalNumber = (num) => {
  const re = /^[0-9]+\.[0-9]+$/;
  return String(num).match(re);
};

console.log(validateDecimalNumber(2389));
