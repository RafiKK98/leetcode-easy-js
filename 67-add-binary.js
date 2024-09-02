/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function (a, b) {
  //   let result = "";
  //   let carry = 0;
  //   let i = a.length - 1;
  //   let j = b.length - 1;
  //   while (i >= 0 || j >= 0 || carry == 1) {
  //     if (i >= 0) carry += a.charAt(i--) - "0";
  //     if (j >= 0) carry += b.charAt(j--) - "0";
  //     result += carry % 2;
  //     carry = Math.floor(carry / 2);
  //   }
  //   return Array.from(result).reverse().join("");
  return (BigInt("0b" + a) + BigInt("0b" + b)).toString(2);
};

console.log(addBinary("11", "1"));
console.log(addBinary("1010", "1011"));
