export function characterParity(symbol: string): string {
    console.log(parseInt(symbol, 10))
    const parsedSymbol = parseInt(symbol, 10)
    if (isNaN(parsedSymbol)) return 'not a digit'
    if (parsedSymbol % 2 === 0) return 'even'
    return 'odd'
}

console.log(characterParity('5'))
console.log(characterParity('8'))
console.log(characterParity('q'))
