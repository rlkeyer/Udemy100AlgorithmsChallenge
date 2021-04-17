export function commonCharacterCount(s1: string, s2: string): number {
    // for each str, compile an object with values number of occurences of each key (letter)
    // take min of values for each key between object

    const obj1 = {}
    const obj2 = {}
    let commonChars = 0

    for (const char of s1) {
        if (obj1[char]) {
            obj1[char] += 1
        } else {
            obj1[char] = 1
        }
    }
    for (const char of s2) {
        if (obj2[char]) {
            obj2[char] += 1
        } else {
            obj2[char] = 1
        }
    }

    for (const property in obj1) {
        if (obj1[property] && obj2[property]) {
            commonChars += Math.min(obj1[property], obj2[property])
        }
    }

    return commonChars
}

console.log(commonCharacterCount('aabcc', 'adcaa'));