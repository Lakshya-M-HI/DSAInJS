let loopcount = 0
function bubbleSort_In_descending(arr) {

    for (let i = 0; i < arr.length; i++) {

        let swaped = false
        for (let j = 1; j < arr.length - i; j++) {

            loopcount++
            if (arr[j - 1] < arr[j]) {

                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
                swaped = true
            }
        }

        if (!swaped) break;
    }

    return arr
}

console.log(bubbleSort_In_descending([1, 2, 5, 7, 8, 15, 33, 54, 100, 300]))
console.log({ loopcount })