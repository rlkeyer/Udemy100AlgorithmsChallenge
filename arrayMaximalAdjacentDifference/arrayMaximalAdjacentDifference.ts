export function arrayMaximalAdjacentDifference(inputArray: number[]): number {
    // iterate over array, take abs of current - next
    // keep track of max
    let max = 0

    for (let i = 0; i < inputArray.length - 1; i++) {
        let current = inputArray[i]
        let next = inputArray[i + 1]

        let diff = Math.abs(current - next)

        if (diff > max) max = diff
    }

    return max
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));