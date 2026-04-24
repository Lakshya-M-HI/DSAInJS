function kth_smallest_element(arr, k) {

    for (let i = 0; i < arr.length - 1; i++) {

        let minIndex = i
        for (let j = i + 1; j < arr.length; j++) {

            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }

        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
        console.log(`Pass ${i + 1} -> min index = ${minIndex}`)
    }


    return arr
}

console.log([7, 2, 9, 4, 1])
console.log(kth_smallest_element([7, 2, 9, 4, 1], 3))