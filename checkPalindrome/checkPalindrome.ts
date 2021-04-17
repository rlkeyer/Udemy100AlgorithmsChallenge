export function checkPalindrome(inputString: string): boolean {
    const lowerCased = inputString.toLowerCase()
    const reversed = lowerCased.split('').reverse().join('')
    return lowerCased === reversed
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));
