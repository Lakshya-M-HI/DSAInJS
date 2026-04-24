function sort_till_k_Times(arr, k) {

    for (let i = 0; i < arr.length; i++) {
        if (i >= k) break;

        for (let j = 1; j < arr.length - i; j++) {

            if (arr[j - 1] > arr[j]) {
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
            }
        }
    }

    return arr
}

console.log(sort_till_k_Times([5, 4, 3, 2, 1], 2))




// Sort till k = 2 not passes in an Array

// function sort_till_k(arr, k) {

//     for (let i = 0; i < arr.length; i++) {

//         for (let j = 1; j < arr.length - i; j++) {

//             if (arr[j - 1] > arr[j]) {
//                 [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
//             }

//             if (arr[j - 1] === k || arr[j] === k) break;
//         }
//     }

//     return arr
// }

// console.log(sort_till_k([5, 4, 3, 2, 1], 2))