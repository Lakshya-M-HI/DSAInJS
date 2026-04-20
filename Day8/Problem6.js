function non_repeating_char(str) {
    let freq = {}
    let arr = [...str]
    arr.forEach(item => {
        freq[item]
            ? freq[item]++
            : freq[item] = 1
    });


    const found = Object.keys(freq).find(item => freq[item] === 1)

    return found ? found : 'There is no non-repeating character in string'
}

console.log(non_repeating_char('aabbcddeff'))