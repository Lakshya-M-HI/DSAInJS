function misingNumber(arr) {
    arr.sort()
    console.log(arr)
    for (let i = 1; i <= arr.length; i++) {
        if (arr[i - 1] !== i) return i
    }
}

console.log(misingNumber([1, 5, 2, 4]))