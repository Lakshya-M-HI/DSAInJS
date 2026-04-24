function sort_array_using_InsertionSort(arr, element) {

    // for (let i = 1; i < arr.length; i++) {

    //     let current = arr[i]
    //     let j = i - 1
    //     while (j >= 0 && arr[j] < current) {
    //         arr[j + 1] = arr[j]
    //         j--
    //     }

    //     arr[j + 1] = current
    // }

    // arr.push(element)
    arr[arr.length] = element // 40% faster

    let i = arr.length - 2
    while (i >= 0 && arr[i] > element) {
        arr[i + 1] = arr[i]
        i--
    }

    arr[i + 1] = element

    return arr
}

console.log(sort_array_using_InsertionSort([1, 3, 5, 6], 4))