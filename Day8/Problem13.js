function compress_A_string(str) {
    let charFreq = {}

    for (let i = 0; i < str.length; i++) {
        charFreq[str[i]]
            ? charFreq[str[i]]++
            : charFreq[str[i]] = 1
    }

    let arr = []
    Object.keys(charFreq).forEach(item => {
        arr.push(item, charFreq[item])
    })

    return arr.join('')
}

console.log(compress_A_string('aaabbccccd'))