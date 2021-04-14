export function arrayPreviousLess(items: number[]): number[] {
    let outputArray = [-1]

    for (let i = 1; i < items.length; i++) {
        const prevItems = items.slice(i - 1, i)
        let newVal = -1
        prevItems.forEach((item) => {
            if (item < items[i] && item > newVal) newVal = item
        })
        
        outputArray.push(newVal)
    }
    return outputArray
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));