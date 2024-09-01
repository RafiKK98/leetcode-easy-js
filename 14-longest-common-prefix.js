/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
    let result = '';
    strs.sort();
    const minLength = Math.min(strs[0].length, strs[strs.length - 1].length);
    for (let i = 0; i < minLength; i++) {
        if (strs[0].charAt(i) !== strs[strs.length - 1].charAt(i)) {
            return result
        }
        result += strs[0].charAt(i);
    }
    return result;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
