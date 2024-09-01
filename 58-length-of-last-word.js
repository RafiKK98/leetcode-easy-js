/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
  s = s.trim();
  if (s.length === 0 || s.length === 1) return s.length;
  return s.length - 1 - s.lastIndexOf(" ");
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));
console.log(lengthOfLastWord(" a"));
