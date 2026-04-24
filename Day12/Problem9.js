function sort_2D_array_by_first_element(arr) {

    for (let i = 0; i < arr.length; i++) {

        let swaped = false
        for (let j = 1; j < arr.length - i; j++) {

            if (arr[j - 1]?.[0] > arr[j]?.[0]) {

                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
                swaped = true;
            }
        }
    }

    return arr
}

console.log(sort_2D_array_by_first_element([[3, "c"], [1, "a"], [2, "b"]]))