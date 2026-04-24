// Approach 1 - required swaps

function selectionSort(arr) {

    for (let i = 0; i < arr.length - 1; i++) {

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

    return arr
}

console.log(selectionSort([7, 2, 9, 4, 1]))


// Approach2 - performs more swap than usuall 
// swaping is expensive somtimes

// function selectionSort(arr) {

//     for (let i = 0; i < arr.length - 1; i++) {

//         for (let j = i + 1; j < arr.length; j++) {

//             if (arr[j] < arr[i]) {
//                 [arr[i], arr[j]] = [arr[j], arr[i]]
//             }
//         }
//     }

//     return arr
// }

// console.log(selectionSort([7, 2, 9, 4, 1]))