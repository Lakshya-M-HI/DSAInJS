
function sort_by_ASCII(arr) {

    for (let i = 0; i < arr.length; i++) {

        let miniIndex = i
        for (let j = i + 1; j < arr.length; j++) {

            if (arr[j].charCodeAt() < arr[miniIndex].charCodeAt()) {
                miniIndex = j
            }
        }

        if (miniIndex !== i) {
            [arr[i], arr[miniIndex]] = [arr[miniIndex], arr[i]]
        }
    }

    return 'Sorted by ASCII:' + arr
}

console.log(sort_by_ASCII(['d', 'A', 'c', 'B']))