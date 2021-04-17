export function bishopAndPawn(bishop: string, pawn: string): boolean {
    const letterNumber = {
        'a': 1,
        'b': 2,
        'c': 3,
        'd': 4,
        'e': 5,
        'f': 6,
        'g': 7,
        'h': 8,
    }

    const bishopSplit = bishop.split('')

    const bishopX = letterNumber[bishopSplit[0]]
    const bishopY = parseInt(bishopSplit[1], 10)

    const pawnSplit = pawn.split('')

    const pawnX = letterNumber[pawnSplit[0]]
    const pawnY = parseInt(pawnSplit[1], 10)

    return (Math.abs(bishopX - pawnX) === Math.abs(bishopY - pawnY))
}

console.log(bishopAndPawn('a2', 'g8'));