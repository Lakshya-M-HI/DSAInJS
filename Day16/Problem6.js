function binarySearch_greatest_element_smaller_than_target(target) {


    let start = 1
    let end = target

    while (start <= end) {

        const mid = Math.floor((start + end) / 2)

        if (mid * mid === target) {
            return mid
        }

        if (mid * mid < target) {
            start = mid + 1
        }

        if (mid * mid > target) {
            end = mid - 1
        }
    }

    return false
}

console.log(binarySearch_greatest_element_smaller_than_target(36))