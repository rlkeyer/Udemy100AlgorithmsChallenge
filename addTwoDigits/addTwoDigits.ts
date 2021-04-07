export function addTwoDigits(n: number): number {
    const str = n.toString()
    const int1 = parseInt(str[0])
    const int2 = parseInt(str[1])

    return int1 + int2
}

// console.log(addTwoDigits(29));