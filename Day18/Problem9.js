function last_Occurrence(arr, element, i = arr.length - 1) {
    if (!arr[i]) return false
    if (arr[i] === element) return i
    return last_Occurrence(arr, element, --i)
}

console.log(last_Occurrence([5, 3, 7, 3, 9], 3))