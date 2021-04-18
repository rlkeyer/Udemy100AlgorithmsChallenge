export function confirmEnding(str: string, target: string) {
    const strLen = str.length
    const targetLen = target.length

    return str.substr(strLen - targetLen) === target
}

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));