export function isCaseInsensitivePalindrome(inputString: string): boolean {
    const lowerCased = inputString.toLowerCase()
    const len = inputString.length
    const firstHalf = lowerCased.slice(0, Math.floor(len / 2))
    const secondHalf = lowerCased.slice(Math.ceil(len / 2), len)
    const reversedSecondHalf = secondHalf.split('').reverse().join('')
    return (firstHalf === reversedSecondHalf)
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));