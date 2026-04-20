function max_SubArray_with_sum(arr) {

    function sum(arr) {
        let sum = 0

        for (let i = 0; i < arr.length - 2; i++) {
            sum += arr[i]
        }

        return sum
    }

    let arrSum = sum(arr)

    if (arr[arr.length - 2] >= arr[arr.length - 1]) return arrSum + arr[arr.length - 2]

    return arrSum + arr[arr.length - 1]

}

console.log(max_SubArray_with_sum([-2, 1, -3, 4, -1, 2, 1, -5, 4])) 