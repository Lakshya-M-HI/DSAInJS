function Palindrome(str) {
    let str2 = str.split('')
    let limit = Math.floor(str2.length / 2)
    for (let i = 0; i < limit; i++) {
        if (str[i] !== str[str2.length - 1 - i]) return false
    }
    return str2.join('') === str
}

console.log(Palindrome('racecar'))