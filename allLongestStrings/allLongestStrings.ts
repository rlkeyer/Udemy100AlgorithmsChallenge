export function allLongestStrings(inputArray: string[]): string[] {
    let longest = 0
    inputArray.forEach((str) => {
        if (str.length > longest) longest = str.length
    })
    return inputArray.filter((str) => str.length === longest)
}

// console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));