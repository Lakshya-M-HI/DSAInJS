let loop = 0

function string_starts_with_given_char(arr, char) {
    
    for (let i = 0; i < arr.length; i++) {
        loop++
        if (arr[i]?.[0] === char) return arr[i]
    }

    return true
}

console.log(string_starts_with_given_char(["apple", "ball", "cat", "apply"], 'a'))
console.log(loop)