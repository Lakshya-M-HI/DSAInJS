function frequency_Of_word(str) {
    let arr = str.split(' ')
    let charFreq = {}

    for (let i = 0; i < arr.length; i++) {
        charFreq[arr[i]]
            ? charFreq[arr[i]]++
            : charFreq[arr[i]] = 1
    }

    return charFreq
}

console.log(frequency_Of_word('i love coding and i love javascript'))