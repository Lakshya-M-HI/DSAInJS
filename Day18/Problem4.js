// Approach 1 - O(n/2)
function reverse_string(str, i = 0, arr = null) {

    if (!arr) arr = str.split('')

    if (i >= arr.length / 2) return arr.join('')

    return [arr[i], arr[arr.length - 1 - i]] =
        [arr[arr.length - 1 - i], arr[i]], reverse_string(str, ++i, arr)
}

console.log(reverse_string('hello'))


// Approach 2 - O(n)
// function reverse_string(str, index = str.length - 1) {
//     if (index < 0) return "";
//     return str[index] + reverse_string(str, index - 1)
// }

// console.log(reverse_string("hello"))