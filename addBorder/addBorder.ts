export function addBorder(picture: string[]): string[] {
    const strLen = picture[0].length
    picture.forEach((str, index) => {
        const end = str.concat('', '*')
        picture[index] = '*'.concat('', end)
    })
    picture.push('*'.repeat(strLen + 2))
    picture.unshift('*'.repeat(strLen + 2))
    return picture
}

// console.log(addBorder(["abc", "ded"]));