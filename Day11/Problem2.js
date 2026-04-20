function zeroesToend(arr) {
    let length = arr.length
    for (let i = 0; i < length; i++) {
        if (arr[i] === 0) {
            arr.push(arr[i])
            arr.splice(i, 1)
        }
    }

    return arr
}

console.log(zeroesToend([0, 1, 0, 3, 12]))