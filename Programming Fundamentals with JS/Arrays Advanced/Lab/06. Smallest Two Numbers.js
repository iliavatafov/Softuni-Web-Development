function smallestNum(nums) {
    nums.sort((a, b) => a - b);
    console.log(nums[0], nums[1]);
}