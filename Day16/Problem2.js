function binarySearch_first_occurrence(arr, target) {

    let start = 0
    let end = arr.length - 1
    let ans

    while (start <= end) {

        const mid = Math.floor((start + end) / 2)

        if (arr[mid] === target) {
            end = mid - 1
            ans = mid
        }

        if (arr[mid] < target) {
            start = mid + 1
        }

        if (arr[mid] > target) {
            end = mid - 1
        }
    }

    return ans >= 0 ? ans : 'Not found'
}

console.log(binarySearch_first_occurrence([2, 4, 4, 4, 7, 9], 4))