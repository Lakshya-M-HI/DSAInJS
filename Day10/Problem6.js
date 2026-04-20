function secondLargest(arr) {
    let fMax = arr[0] >= arr[1] ? arr[0] : arr[1]
    let sMax = arr[0] < arr[1] ? arr[0] : arr[1]

    for (let i = 2; i < arr.length; i++) {

        // console.log(arr[i])
        if (arr[i] > fMax) {
            sMax = fMax, fMax = arr[i]
        } else if (arr[i] <= fMax && arr[i] > sMax) {
            sMax = arr[i]
        }

    }

    return sMax
}

console.log(secondLargest([100, 20, 4, 45, 55, 99]))