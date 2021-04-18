export function compareIntegers(a: string, b: string): string {
    const aInt = parseInt(a, 10)
    const bInt = parseInt(b, 10)

    if (aInt < bInt) return "less"
    if (aInt > bInt) return "greater"
    return "equal"
}

console.log(compareIntegers('12', '13'));
console.log(compareIntegers('875', '799'));
console.log(compareIntegers('1000', '1000'));