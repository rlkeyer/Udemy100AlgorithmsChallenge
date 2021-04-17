export function isCaseInsensitivePalindrome(inputString: string): boolean {
    const lowerCased = inputString.toLowerCase()
    const reversed = lowerCased.split('').reverse().join('')
    return (lowerCased === reversed)
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));