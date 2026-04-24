// function reverseString(str) {
//     let str2 = []
//     for (let i = str.length - 1; i >= 0; i--) {
//         str2.push(str[i])
//     }
//     return str2.join('')
// }

// console.log(reverseString('javascript'))


// Appproach 2 - O(n/2)
// solved using two pointer method

function reverseString(str) {
    let str2 = str.split('')
    let limit = Math.floor(str.length / 2)
    for (let i = 0; i < limit; i++) {
        [str2[i], str2[str2.length - 1 - i]] = [str2[str2.length - 1 - i], str2[i]]
    }
    return str2.join('')
}

console.log(reverseString('javascript'))