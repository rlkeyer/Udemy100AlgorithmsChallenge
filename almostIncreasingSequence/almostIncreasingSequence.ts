export function almostIncreasingSequence(sequence: number[]): boolean {
    // iterate over array and check if next element is 1 more than current
    // if not, set mulligan to true and move on
    // if mulligan is already true, return false
    let mulliganCount = 0
    for (let i = 0; i < sequence.length - 1; i++) {
        if (sequence[i] + 1 !== sequence[i + 1]) {
            if (mulliganCount > 1) return false
            if (mulliganCount === 0 && (sequence[i] + 1 !== sequence[i + 2])) return false
            mulliganCount += 1
        }
    }
    return true
}

console.log(almostIncreasingSequence([1, 3, 2, 1])) 
console.log(almostIncreasingSequence([1, 3, 2])) 
console.log(almostIncreasingSequence([1, 2, 16, 7, 8, 9]))