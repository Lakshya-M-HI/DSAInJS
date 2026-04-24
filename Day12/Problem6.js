// Approach 1

function sort_an_Array_and_zeroes_at_End(arr) {

    let index = 0
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] !== 0) {
            [arr[index], arr[i]] = [arr[i], arr[index]]
            index++
        }
    }

    for (let j = 0; j < index - 1; j++) {

        let swaped = false;
        for (let k = 1; k < index - j; k++) {

            if (arr[k - 1] > arr[k]) {
                [arr[k - 1], arr[k]] = [arr[k], arr[k - 1]]
                swaped = true
            }
        }

        if (!swaped) break;
    }

    return arr

}


console.log(sort_an_Array_and_zeroes_at_End([7, 6, 0, 4, 2, 0, 0, 0, 3, 1, 4, 6]))



// Approach 2 - It is good approach takes O(n2)

// function sort_an_Array_and_zeroes_at_End(arr) {

//     for (let i = 0; i < arr.length; i++) {

//         let index = 0
//         for (let j = 0; j < arr.length - i; j++) {

//             if (arr[j] !== 0 && i === 0) {
//                 [arr[index], arr[j]] = [arr[j], arr[index]]
//                 index++
//             }

//             if (arr[j] > arr[j + 1] && (arr[j] !== 0 && arr[j + 1] !== 0) && j <= arr.length - 2) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//             }
//         }
//     }

//     return arr
// }

// console.log(sort_an_Array_and_zeroes_at_End([7, 6, 0, 4, 2, 0, 0, 0, 3, 1, 4, 6]))



// Approach 3 - worst approch beacuse splice itself takes O(n), due this it overall takes O(n3)

// function sort_an_Array_and_zeroes_at_End(arr) {

//     let loopcount = 0
//     for (let i = 0; i < arr.length; i++) {

//         let swaped = false;
//         for (let j = 1; j < arr.length; j++) {

//             loopcount++
//             if (arr[j] === 0 && j !== arr.length - 1)
//                 arr.push(...arr.splice(j, 1))

//             if (arr[j - 1] === 0)
//                 arr.push(...arr.splice(j - 1, 1))


//             if (arr[j - 1] > arr[j] && arr[j] !== 0 && arr[j - 1] !== 0) {
//                 [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
//                 swaped = true;
//             }
//         }

//         if (!swaped) break;
//     }

//     return { arr, loopcount }
// }


// console.log(sort_an_Array_and_zeroes_at_End([3, 0, 5, 0, 2, 1]));
