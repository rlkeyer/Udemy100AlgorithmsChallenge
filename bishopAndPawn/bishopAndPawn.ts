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

    const bishopX = letterNumber[bishop[0]]
    const bishopY = parseInt(bishop[1], 10)

    const pawnX = letterNumber[pawn[0]]
    const pawnY = parseInt(pawn[1], 10)

    return (Math.abs(bishopX - pawnX) === Math.abs(bishopY - pawnY))
}

console.log(bishopAndPawn('a2', 'g8'));