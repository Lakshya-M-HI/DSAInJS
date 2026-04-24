function array_strictly_increasing(arr, target) {


    for (let i = 1; i < arr.length; i++) {
        if (arr[i-1] > arr[i]) return false
    }

    return true
}

console.log(array_strictly_increasing([1, 2, 3, 5, 4]
))