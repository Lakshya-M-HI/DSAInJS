
function sort_elements_at_even_Indexes(arr) {

    for (let i = 0; i < arr.length; i++) {

        if (i % 2 !== 0) continue;
        
        let miniIndex = i
        for (let j = i + 1; j < arr.length; j++) {

            if (j % 2 === 0 && arr[j] < arr[miniIndex]) {
                miniIndex = j
            }
        }

        if (miniIndex !== i) {
            [arr[i], arr[miniIndex]] = [arr[miniIndex], arr[i]]
        }
    }

    return arr
}

// console.log(sort_elements_at_even_Indexes([9, 4, 7, 6, 3]))
console.log(sort_elements_at_even_Indexes([7, 1, 6, 4, 3, 2, 5, 8, 4, 2]))
