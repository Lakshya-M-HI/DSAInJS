function sort_and_number_Of_swaps(arr) {

    let swaps = 0
    for (let i = 0; i < arr.length; i++) {

        let swaped = false
        for (let j = 1; j < arr.length - i; j++) {

            if (arr[j - 1] > arr[j]) {
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
                swaped = true
                swaps++
            }
        }

        if (!swaped) break;
    }

    return `Sorted: [${arr}]\nSwaps: ${swaps}`
}

console.log(sort_and_number_Of_swaps([4, 3, 2, 1]))