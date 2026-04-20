function leftShift_array_BYOnePosition(arr) {
    arr.push(arr[0])
    arr.shift()

    return arr
}

console.log(leftShift_array_BYOnePosition([1, 2, 3, 4]))