export function absoluteValuesSumMinimization(a: number[]): number {
    const halfLength = a.length / 2
    if (a.length % 2 !== 0) return a[Math.floor(halfLength)]
    return a[halfLength - 1]
}

// console.log(absoluteValuesSumMinimization([2, 4, 7]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));