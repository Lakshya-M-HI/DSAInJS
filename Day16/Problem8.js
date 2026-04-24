function binarySearch_greatest_element_smaller_than_target(arr, target) {

    let start = 0
    let end = arr.length - 1

    while (start <= end) {

        const mid = Math.floor((start + end) / 2)

        if (arr[mid] === target) {
            return `Index ${mid}`
        }

        if (arr[mid] > target) {
            start = mid + 1
            ans = mid
        }

        if (arr[mid] < target) {
            end = mid - 1
        }
    }

    return false
}

console.log(binarySearch_greatest_element_smaller_than_target([100, 90, 70, 40, 10], 70))