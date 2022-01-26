function sorting(nums) {
    let numbers = nums.map(x => x);
    numbers.sort((a, b) => a - b);
    let result = [];

    for (let i = 0; i < numbers.length; i++) {
        let lastNum = numbers.pop();
        result
            .push(lastNum, numbers[i])
    }

    console.log(result.join(` `))
}