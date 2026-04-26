
function add(arr, i = 0) {
    if (i === arr.length) return 0
    return arr[i] + add(arr, ++i)
}

console.log(add([2, 4, 6, 8]))