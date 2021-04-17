export function chessBoardCellColor(cell1: string, cell2: string): boolean {
    const board = {
        'a': 1,
        'b': 2,
        'c': 3,
        'd': 4,
        'e': 5,
        'f': 6,
        'g': 7,
        'h': 8,
    }

    const cell1X = board[cell1[0].toLowerCase()]
    const cell1Y = parseInt(cell1[1], 10)
    const cell2X = board[cell2[0].toLowerCase()]
    const cell2Y = parseInt(cell2[1], 10)

    const cell1IsEven = Math.abs(cell1X - cell1Y) % 2 === 0
    const cell2IsEven = Math.abs(cell2X - cell2Y) % 2 === 0


    console.log(cell1IsEven, cell2IsEven)
    
    if (cell1IsEven === cell2IsEven) return true
    return false
}

console.log(chessBoardCellColor('A1', 'C3'));
console.log(chessBoardCellColor('A1', 'H3'));
