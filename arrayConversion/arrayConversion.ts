export function arrayConversion(inputArray: number[]): number {
    // create var to track even or odd iteration
    // if odd, add
    // if even, multiply

    let iteration = 1
    let outputArray = []
    let totalIterations = inputArray.length / 2 - 1

    for (let i = 0; i < totalIterations; i++) {
        outputArray = []
        for (let j = 0; j < inputArray.length; j+=2) {
            if (iteration % 2 !== 0) {
                outputArray.push(inputArray[j] + inputArray[j + 1])
            } else {
                outputArray.push(inputArray[j] * inputArray[j + 1])
            }
        }
        inputArray = outputArray
        iteration += 1
    }

    return outputArray[0]
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
