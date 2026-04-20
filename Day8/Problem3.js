function frequency_char(str) {
    let freq = {}
    let arr = [...str]
    arr.forEach(item => {
        freq[item]
            ? freq[item]++
            : freq[item] = 1
    });

    return freq
}

console.log(frequency_char('banana'))