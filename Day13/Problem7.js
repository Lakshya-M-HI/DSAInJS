function sort_2D_array(arr) {

    for (let i = 0; i < arr.length; i++) {

        let miniIndex = i
        for (let j = i + 1; j < arr.length; j++) {

            if (arr[j]?.[1] < arr[miniIndex]?.[1]) {
                miniIndex = j
            }
        }

        if (miniIndex !== i) {
            [arr[i], arr[miniIndex]] = [arr[miniIndex], arr[i]]
        }
    }

    return arr
}

console.log(sort_2D_array([[3, 9], [1, 4], [2, 5]]))