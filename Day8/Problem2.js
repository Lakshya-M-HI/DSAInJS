function Palindrome(str) {
    let str2 = []
    for (let i = str.length - 1; i >= 0; i--) {
        str2.push(str[i])
    }
    return str2.join('') === str
}

console.log(Palindrome('racecar'))