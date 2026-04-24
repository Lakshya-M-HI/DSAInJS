function first_occurence_Of_an_element(arr, element) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) return i
    }

    return false
}

console.log(first_occurence_Of_an_element([3, 5, 3, 7, 3], 3))