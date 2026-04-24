function sort_and_number_Of_compare(arr) {

    let comparisons = 0
    for (let i = 0; i < arr.length; i++) {

        for (let j = 1; j < arr.length - i; j++) {

            if (arr[j - 1] > arr[j]) {
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
            }
            comparisons++
        }
    }

    return `Sorted array: [${arr}]\nTotal comparisons: ${comparisons}`
}

console.log(sort_and_number_Of_compare([5, 1, 4, 2, 8]))