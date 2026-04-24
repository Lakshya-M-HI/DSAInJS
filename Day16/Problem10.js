function binarySearch_greatest_element_smaller_than_target(arr, target) {

    arr = arr.split('')

    let start = 0
    let end = arr.length - 1
    let ans

    while (start <= end) {

        const mid = Math.floor((start + end) / 2)

        if (arr[mid] === target) {
            ans = mid
            end = mid - 1
        }

        if (arr[mid] < target) {
            start = mid + 1
        }

        if (arr[mid] > target) {
            end = mid - 1
        }
    }

    return ans
}

console.log(binarySearch_greatest_element_smaller_than_target("aabbccddeefg", 'e'))