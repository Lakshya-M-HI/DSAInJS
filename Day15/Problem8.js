function find_all_indexes_Of_an_element(arr) {

   let min = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i]
    }

    return min
}

console.log(find_all_indexes_Of_an_element([9, 3, 5, 1, 7]
))