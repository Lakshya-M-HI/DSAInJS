function rotate_Array(arr, k) {

    return [...arr.slice(arr.length - k), ...arr.slice(0, arr.length - k)]
}

console.log(rotate_Array([1, 2, 3, 5, 7, 6, 4, 5], 2))