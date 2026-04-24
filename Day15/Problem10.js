function first_element_greater_than_target(arr, target) {


    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > target) return arr[i]
    }

    return false
}

console.log(first_element_greater_than_target([2, 5, 9, 12, 15], 10
))