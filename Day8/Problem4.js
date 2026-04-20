function most_freqChar(str) {
    let freq = {}
    let arr = [...str]
    arr.forEach(item => {
        freq[item]
            ? freq[item]++
            : freq[item] = 1
    });


    let fq = Object.keys(freq)
    // console.log(freq)
    let mostFreq = fq[0]
    let i = 1

    while (i < fq.length) {
        freq[mostFreq] < fq[i] ? freq[mostFreq] = fq[i] : ''
        i++
    }

    return `Most Frequency:  ${mostFreq} ${freq[mostFreq]}`
}

console.log(most_freqChar('success'))