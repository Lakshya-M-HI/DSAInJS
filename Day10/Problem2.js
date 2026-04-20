function reverse_Array(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]]
    }

    return arr
}

console.log(reverse_Array([1, 2, 3, 4, 5]))