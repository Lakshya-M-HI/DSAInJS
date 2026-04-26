function check_all_even(arr, i = 0) {
    if (!arr[i]) return true
    if (arr[i] % 2 !== 0) return false
    return check_all_even(arr, ++i)
}

console.log(check_all_even([2, 4, 6, 8]))