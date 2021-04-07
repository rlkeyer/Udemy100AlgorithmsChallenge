export function alternatingSums(a: number[]): number[] {
    let team1 = 0
    let team2 = 0
    a.forEach((num, index) => {
        if (index % 2 === 0) {
            team1 += num
        } else {
            team2 += num
        }
    })
    return [team1, team2]
}

// console.log(alternatingSums([50, 60, 60, 45, 70]))