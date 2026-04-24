// Approach 1

function most_freqChar(str) {
    let freq = {}
    let most_freq = 0
    let most_char = ''
    let arr = [...str]
    arr.forEach(item => {
        freq[item]
            ? freq[item]++
            : freq[item] = 1

        if (most_freq < freq[item]) {
            most_freq = freq[item]
            most_char = item
        }

    });
    return `Most Frequency: ${most_char} ${most_freq}`
}

console.log(most_freqChar('success'))



// Approach 2

// function most_freqChar(str) {
//     let freq = {}
//     let arr = [...str]
//     arr.forEach(item => {
//         freq[item]
//             ? freq[item]++
//             : freq[item] = 1
//     });


//     let fq = Object.keys(freq)
//     // console.log(freq)
//     let mostFreq = fq[0]
//     let i = 1

//     while (i < fq.length) {
//         freq[mostFreq] < fq[i] ? freq[mostFreq] = fq[i] : ''
//         i++
//     }

//     return `Most Frequency:  ${mostFreq} ${freq[mostFreq]}`
// }

// console.log(most_freqChar('success'))