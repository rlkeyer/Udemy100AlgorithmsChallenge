export function chunkyMonkey(arr: any[], size: number): any[][] {
    const resultArr = []

    for (let i = 0; i < arr.length; i+= size) {
        resultArr.push(arr.slice(i, i + size))
    }

    return resultArr
}

console.log(chunkyMonkey(["a", "b", "c", "d",5 , 6, 7, 8, 9, 0, 9, 8,7, 10], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));