function ascending_sort_array_using_InsertionSort(arr) {

    console.log(arr)

    for (let i = 1; i < arr.length; i++) {

        let current = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j]
            j--
        }

        arr[j + 1] = current
        console.log(arr)
    }

    return arr
}

console.log(ascending_sort_array_using_InsertionSort([9, 5, 1, 4, 3]))