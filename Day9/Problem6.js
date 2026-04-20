function remove_All_duplicates_word(str) {
    let arr = []
    let strArr = str.split(' ')

    for (let i = 0; i < str.length; i++) {
        !arr.includes(strArr[i])
            ? arr.push(strArr[i])
            : ''
    }

    return arr.join(' ')
}

console.log(remove_All_duplicates_word("this is is a test test string"))