function max_min_Element(arr) {
    let max
    let min

    arr = arr.sort((a, b) => a - b)
    // console.log(arr)
    min = arr[0]
    max = arr[arr.length - 1]

    return { min, max }
}

console.log(max_min_Element([10, 25, 3, 18]))