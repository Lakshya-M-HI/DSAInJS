function peak_element_in_mountain_arraya_using_binary_search(arr) {

    let start = 0
    let end = arr.length - 1
    let mid = Math.floor((start + end) / 2)

    while (start < end) {

        mid = Math.floor((start + end) / 2)

        if (arr[mid] < arr[mid + 1]) {
            start = mid + 1
        } else {
            end = mid
        }
    }


    return arr[start]
}

console.log(peak_element_in_mountain_arraya_using_binary_search([1, 3, 5, 7, 6, 4, 2]))