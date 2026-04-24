// Approach 1 - It is optimal with conditions

function even_numbers_bubble_sort(arr) {

    for (let i = 0; i < arr.length; i++) {

        let index = 0;
        let swaped = false
        for (let j = 1; j < arr.length - i; j++) {

            if (arr[index] % 2 !== 0) {
                index++;
            }

            if (arr[j] % 2 === 0 && arr[index] % 2 === 0 && arr[index] > arr[j]) {
                [arr[index], arr[j]] = [arr[j], arr[index]]
                swaped = true
                index++
            }
        }

        if (!swaped) break;
    }

    return arr
}

// console.log(even_numbers_bubble_sort([9, 4, 2, 7, 6, 5]))
console.log(even_numbers_bubble_sort([7, 1, 6, 4, 3, 2, 5, 8, 4, 2]))



// Approach 2 
// It is also O(n2) but with 3 loops

// function even_numbers_bubble_sort(arr) {

//     let evens = arr.filter(x => x % 2 === 0)

//     for (let i = 0; i < evens.length; i++) {

//         let swaped = false;
//         for (let j = 0; j < arr.length; j++) {

//             if (evens[j - 1] > evens[j]) {
//                 [evens[j - 1], evens[j]] = [evens[j], evens[j - 1]]
//                 swaped = true
//             }
//         }

//         if (!swaped) break;
//     }

//     let k = 0
//     for (let i = 0; i < arr.length; i++) {

//         if (arr[i] % 2 === 0) {
//             arr[i] = evens[k++]
//         }
//     }

//     return arr
// }


// console.log(even_numbers_bubble_sort([7, 1, 6, 4, 3, 2, 5, 8, 4, 2]))



// Approach 3
// It is not too good approach because it manipulates the loop variables

// function even_numbers_bubble_sort(arr) {

//     for (let i = 0; i < arr.length; i++) {

//         let swaped = false;
//         for (let j = 1; j < arr.length - i; j++) {

//             let diff = 1
//             if (arr[j - diff] % 2 !== 0 && arr[j] % 2 !== 0) {
//                 j += 2;
//             };

//             if (arr[j - diff] % 2 === 0 && arr[j] % 2 !== 0) {
//                 diff++;
//                 j++;
//             };


//             if (arr[j - diff] > arr[j] && arr[j - diff] % 2 === 0 && arr[j] % 2 === 0) {

//                 [arr[j - diff], arr[j]] = [arr[j], arr[j - diff]]
//                 swaped = true
//             }
//         }

//         if (!swaped) break;
//     }

//     return arr
// }

// console.log(even_numbers_bubble_sort([7, 1, 6, 4, 3, 2, 5, 8, 4, 2]))