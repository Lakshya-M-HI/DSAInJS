function how_many_times_an_elemnt_appears_using_bineary_search(arr, target) {

    function firstOcurrence() {
        let start = 0
        let end = arr.length - 1
        let ans = -1


        while (start <= end) {

            const mid = Math.floor((start + end) / 2)

            if (arr[mid] === target) {
                end = mid - 1
                ans = mid
            } else if (arr[mid] < target) {
                start = mid + 1
            } else {
                end = mid - 1
            }
        }
        return ans
    }

    function lastOccurrence() {
        let start = 0
        let end = arr.length - 1
        let ans = -1


        while (start <= end) {

            const mid = Math.floor((start + end) / 2)

            if (arr[mid] === target) {
                start = mid + 1
                ans = mid
            } else if (arr[mid] < target) {
                start = mid + 1
            } else {
                end = mid - 1
            }
        }

        return ans
    }

    let first = firstOcurrence()
    let last = lastOccurrence()

    if (first === -1) return 0

    return last - first + 1
}



console.log(how_many_times_an_elemnt_appears_using_bineary_search([1, 2, 2, 2, 3, 4], 2))