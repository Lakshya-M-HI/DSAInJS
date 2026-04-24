function first_occurence_Of_an_element(arr, element) {

    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) count++;
    }

    return count
}

console.log(first_occurence_Of_an_element([1, 2, 2, 3, 2, 4], 2))