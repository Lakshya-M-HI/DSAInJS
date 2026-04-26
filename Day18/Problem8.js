function first_Occurrence(arr, element, i = 0) {
    if(!arr[i]) return false
    if (arr[i] === element) return i
    return first_Occurrence(arr, element, ++i)
}

console.log(first_Occurrence([5, 3, 7, 3, 9], 3))