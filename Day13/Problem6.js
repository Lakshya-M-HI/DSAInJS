function kth_largest_element(arr, k) {

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

    return arr.slice(0, k)
}

console.log(kth_largest_element([5, 1, 9, 3, 7], 2))