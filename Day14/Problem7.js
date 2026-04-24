function one_step_Insertion(arr) {

    // Only one step insertion sort
    let current = arr[arr.length - 1]
    let j = arr.length - 2
    while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j]
        j--
    }

    arr[j + 1] = current

    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) return false
    }

    return true
}

console.log(one_step_Insertion([1, 2, 4, 5, 3]))