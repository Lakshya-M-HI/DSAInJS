function find_all_indexes_Of_an_element(arr, element) {

    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) newArr.push(i)
    }

    return newArr
}

console.log(find_all_indexes_Of_an_element([5, 7, 5, 9, 5], 5))