function last_occurence_Of_an_element(arr, element) {

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === element) return i
    }

    return false
}

console.log(last_occurence_Of_an_element([3, 5, 3, 7, 3], 3))