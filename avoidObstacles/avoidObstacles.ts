export function avoidObstacles(inputArray: number[]): number {
    let jump = 2
    while (inputArray.some((num) => num % jump === 0)) {
        jump += 1
    }
    return jump
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));