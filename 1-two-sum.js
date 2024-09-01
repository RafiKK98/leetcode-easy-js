/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    const numToIndex = {}
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numToIndex.hasOwnProperty(complement)) {
            return [numToIndex[complement], i];
        }
        numToIndex[nums[i]] = i;
    }
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3, 3], 6));