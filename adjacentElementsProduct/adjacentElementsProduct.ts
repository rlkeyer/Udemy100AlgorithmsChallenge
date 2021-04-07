export function adjacentElementsProduct(inputArray: number[]): number {
    let highest = inputArray[0] * inputArray[1]
    // loop over input array and see if element + nextElement is greater than highest
    inputArray.forEach((num, index) => {
        const product = num * inputArray[index + 1]
        if (product > highest) highest = product
    })
    return highest
}

// console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));