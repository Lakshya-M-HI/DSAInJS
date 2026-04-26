function palindrome(str, i = 0, arr = null) {

    if (!arr) arr = str.split('')

    if (i >= arr.length / 2) return arr.join('') === str ? "Palindrome" : "Not Palindrome"

    return [arr[i], arr[arr.length - 1 - i]] =
        [arr[arr.length - 1 - i], arr[i]], palindrome(str, ++i, arr)

}

console.log(palindrome("madam"))