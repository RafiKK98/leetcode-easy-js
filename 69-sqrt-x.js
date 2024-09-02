/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
  if (x <= 1) return x;
  let start = 0,
    end = x,
    result = 0;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (mid * mid > x) {
      end = mid - 1;
    } else {
      result = mid;
      start = mid + 1;
    }
  }
  return result;
};

console.log(mySqrt(1));
console.log(mySqrt(2));
console.log(mySqrt(3));
console.log(mySqrt(4));
console.log(mySqrt(6));
console.log(mySqrt(8));
console.log(mySqrt(9));
console.log(mySqrt(16));
