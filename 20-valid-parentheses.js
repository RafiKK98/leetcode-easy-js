/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    if (s.length % 2 !== 0) return false;
    const stack = [];
    for(let i = 0; i < s.length; i++) {
        if ((stack.at(-1) === '(' && s[i] === ')') 
        || (stack.at(-1) === '{' && s[i] === '}') 
        || (stack.at(-1) === '[' && s[i] === ']')) stack.pop();
        else stack.push(s[i]);
    }
    return stack.length === 0;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([])"));
