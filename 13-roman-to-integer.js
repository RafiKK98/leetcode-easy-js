/**
 * @param {string} roman
 * @return {number}
 */
const romanToInt = function (roman) {
  const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  Object.freeze(romanValues);
  let sum = 0;
  for (let i = 0; i < roman.length; i++) {
    if (romanValues[roman[i]] < romanValues[roman[i + 1]]) sum -= romanValues[roman[i]];
    else sum += romanValues[roman[i]];
  }
  return sum;
};

console.log(romanToInt("III"))
console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCIV"))
