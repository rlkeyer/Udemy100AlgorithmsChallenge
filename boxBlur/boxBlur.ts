export function boxBlur(image: number[][]): number[][] {
    const finalArr = []
    for (let i = 1; i < image.length - 1; i++) {
        const arr = []
        for (let j = 1; j < image[i].length - 1; j++) {
            const topRow = image[i - 1][j - 1] + image[i - 1][j] + image[i - 1][j + 1]
            const middleRow = image[i][j - 1] + image[i][j] + image[i][j + 1]
            const bottomRow = image[i + 1][j - 1] + image[i + 1][j] + image[i + 1][j + 1]
            const avg = Math.floor((topRow + middleRow + bottomRow) / 9)
            arr.push(avg)
        }
        finalArr.push(arr)
    }
    return finalArr
}

console.log(boxBlur([
    [1, 1, 1, 1, 1], 
    [1, 7, 1, 5, 1], 
    [1, 1, 1, 4, 5]
]));