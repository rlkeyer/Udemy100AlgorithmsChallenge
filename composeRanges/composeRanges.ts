export function composeRanges(nums: number[]): string[] {
    let resultArr = []
    let midString = false
    let currentStr = ''
    for (let i = 0; i < nums.length; i++) {
        if (!midString) {
            if ((nums[i + 1] - nums[i]) !== 1) {
                resultArr.push(nums[i].toString())
            } else {
                currentStr += nums[i]
                midString = true
            }
        } else {
            if ((nums[i + 1] - nums[i]) !== 1) {
                midString = false
                currentStr += `->${nums[i]}`
                resultArr.push(currentStr)
                currentStr = ''
            }
        }
    }

    return resultArr
}

console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));
console.log(composeRanges([1, 2, 3, 4, 5, 6, 7]))