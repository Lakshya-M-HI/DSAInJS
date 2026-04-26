function maximum_element_in_an_arrya(arr, i = 1, max = arr[0]) {
    if (!arr[i]) return max
    if (arr[i] > max) max = arr[i]
    return maximum_element_in_an_arrya(arr, ++i, max)
}

console.log(maximum_element_in_an_arrya([7, 3, 9, 2, 5]))