function selectionSort_descending(arr) {

    for (let i = 0; i < arr.length - 1; i++) {

        let miniIndex = i
        for (let j = i + 1; j < arr.length; j++) {

            if (arr[j] > arr[miniIndex]) {
                miniIndex = j
            }
        }

        if (miniIndex !== i) {
            [arr[i], arr[miniIndex]] = [arr[miniIndex], arr[i]]
        }
    }

    return arr
}

console.log(selectionSort_descending([7, 2, 9, 4, 1]))