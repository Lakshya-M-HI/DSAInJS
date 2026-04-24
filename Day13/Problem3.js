function kth_smallest_element(arr, k) {

    for (let i = 0; i < k; i++) {

        let miniIndex = i
        for (let j = i + 1; j < arr.length; j++) {

            if (arr[j] < arr[miniIndex]) {
                miniIndex = j
            }
        }

        if (miniIndex !== i) {
            [arr[i], arr[miniIndex]] = [arr[miniIndex], arr[i]]
        }
    }

    return arr[k - 1]
}

console.log(kth_smallest_element([9, 4, 7, 1, 3], 3))