
function check_sorted_array(arr, i = 0) {
    if (i === arr.length) return true
    if (arr[i] < arr[i - 1]) return false

    return check_sorted_array(arr, ++i)
}


console.log(check_sorted_array([1, 2, 3, 5, 4]))