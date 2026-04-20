function array_sorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (!(arr[i] >= arr[i - 1])) return 'unSorted!'
    }

    return 'sorted'
}

console.log(array_sorted([1, 2, 3, 4, 5]))