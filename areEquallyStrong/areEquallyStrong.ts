export function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
    const yourMax = Math.max(yourLeft, yourRight)
    const yourMin = Math.min(yourLeft, yourRight)
    const friendsMax = Math.max(friendsLeft, friendsRight)
    const friendsMin = Math.min(friendsLeft, friendsRight)

    return (yourMax === friendsMax && yourMin === friendsMin)
}

// console.log(areEquallyStrong(10, 15, 15, 10))
// console.log(areEquallyStrong(15, 10, 15, 10))
// console.log(areEquallyStrong(15, 10, 15, 9))
