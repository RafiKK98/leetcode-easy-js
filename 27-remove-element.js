/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
  if (nums.length === 0 || !nums.includes(val)) return nums.length;
  for (let i = 0; i < nums.length; ) {
    if (nums[i] === val) nums.splice(i, 1);
    else i++;
  }
  return nums.length;
};

console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
console.log(removeElement([3, 3], 5));
