function twoSum(nums: number[], target: number): number[] {
  let numMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (numMap.has(target - nums[i])) return [numMap.get(target - nums[i]), i];
    numMap.set(nums[i], i);
  }
  return [-1, -1];
}

/* My initial solution of nesting 2 for loops would pass test cases but result in timeout errors on submission. Map was the missing piece, allowing my to loop through the nums array only once by saving a number and checking for the existence of an exact difference ('target - nums[i]').*/
