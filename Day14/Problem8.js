function array_but_keep_even_indexes_Fixed(arr) {

    let filtered = arr.filter((_, index) => index % 2 === 0)

    for (let i = 0; i < filtered.length; i++) {

        let current = filtered[i]
        let j = i - 1
        while (j >= 0 && filtered[j] > current) {
            filtered[j + 1] = filtered[j]
            j--
        }

        filtered[j + 1] = current
    }


    for (let i = 0, j = 0; i < arr.length; i++) {

        if (i % 2 === 0) {
            arr[i] = filtered[j++]
        }
    }

    return arr
}

console.log(array_but_keep_even_indexes_Fixed([9, 1, 8, 2, 7, 3]))