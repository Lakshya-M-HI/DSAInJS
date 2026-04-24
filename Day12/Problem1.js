// Approach 1 - Not standard

// function bubbleSort(arr) {

//     let limit = arr.length - 1
//     // let sortLoop = limit
//     for (let i = 1; i <= limit; i++) {

//         arr[i - 1] > arr[i]
//             ? [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]]
//             : ''


//         if (i === limit) {
//             i = 0, limit--
//         }
//     }

//     return arr
// }

// console.log(bubbleSort([4, 1, 7, 0, 2]))


// Approach 2 - Standard way

let loopcount = 0
function bubbleSort(arr) {


    for (let i = 0; i < arr.length; i++) {

        let swaped = false
        for (let j = 1; j < arr.length - i; j++) {

            loopcount++
            if (arr[j - 1] > arr[j]) {

                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
                swaped = true
            }

        }

        if (!swaped) break;
    }

    return arr
}

console.log(bubbleSort([1, 2, 5, 7, 8, 15, 33, 54, 100, 300]))
console.log({ loopcount })