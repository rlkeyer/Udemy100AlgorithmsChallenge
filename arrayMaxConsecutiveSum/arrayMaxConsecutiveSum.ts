export function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
    // iterate over the array, for each element add the next k elements
    // if sum is max so far, assign value to max variable
    let max = 0

    for (let i = 0; i < inputArray.length - (k - 1); i++) {
        let total = inputArray[i]
        let next = inputArray[i + 1]
        for (let j = 1; j < k; j++) {
            total += next
            next = inputArray[i + 1 + j]
        }
        if (total > max) max = total
    }

    return max
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));