function insert_index(arr, target) {

    let start = 0
    let end = arr.length - 1
    let ans

    while (start <= end) {

        const mid = Math.floor((start + end) / 2)

        if (arr[mid] < target) {
            start = mid + 1
        }

        if (arr[mid] >= target) {
            end = mid - 1
            ans = mid
        }
    }

    return ans
}

console.log(insert_index([1, 3, 5, 7], 4))