export function candies(n: number, m: number): number {
    const count = Math.floor(m / n)
    return count * n
}

console.log(candies(3, 10));