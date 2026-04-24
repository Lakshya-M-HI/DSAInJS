function sort_array_with_count(arr) {

    let minimumCount = 0
    for (let i = 0; i < arr.length; i++) {

        let miniIndex = i
        for (let j = i + 1; j < arr.length; j++) {

            if (arr[j] < arr[miniIndex]) {
                miniIndex = j
                minimumCount++
            }
        }

        if (miniIndex !== i) {
            [arr[i], arr[miniIndex]] = [arr[miniIndex], arr[i]]
        }
    }

    return { arr, minimumCount }
}

console.log(sort_array_with_count([8, 3, 5, 2, 6]))