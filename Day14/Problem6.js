function sort_array_using_InsertionSort(arr, element) {

    // arr.push(element)
    arr[arr.length] = element // 40% faster

    let i = arr.length - 2
    while (i >= 0 && arr[i] > element) {
        arr[i + 1] = arr[i]
        i--
    }

    return i + 1
}

console.log(sort_array_using_InsertionSort([2, 4, 6, 8], 5))