
function twoSum(nums, target) {
    const numToIndex = {}; 
    for (let i = 0; i < nums.length; i++) {
      const currentNum = nums[i];
      const complement = target - currentNum;
      if (numToIndex.hasOwnProperty(complement)) {
        return [numToIndex[complement], i];
      }
      numToIndex[currentNum] = i;
    }
    return [];
  }
  

//   2nd



function twoSum(nums, target) {
    const numToIndex = {}; 
    for (let i = 0; i < nums.length; i++) {
      const currentNum = nums[i];
      const complement = target - currentNum;
      if (numToIndex.hasOwnProperty(complement)) {
        return [numToIndex[complement], i];
      }
      numToIndex[currentNum] = i;
    }
    return [];
  }
  