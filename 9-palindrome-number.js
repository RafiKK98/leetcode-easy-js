/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    if(x < 0) return false;
    let ans = 0;
    let num = x;
    while (x) {
        ans = (ans * 10) + (x % 10);
        x = Math.floor(x / 10);
    }
    return ans === num;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
