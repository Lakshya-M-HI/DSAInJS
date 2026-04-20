function longest_Palindromic_subString(str) {
    let arr = []

    for (let i = 0, j = 1; i < str.length; i++) {

        let str1 = str.slice(i, i + j)
        let k = i + 1
        // console.log(str1, i, j)

        if (str1 === str1.split('').reverse().join('') && str[k] && !arr.includes(str1)) arr.push(str1)

        while (str[k]) {
            let newStr = str1 + str[k]
            // console.log('newStr: ', newStr)
            if (newStr === newStr.split('').reverse().join('')) {

                if (newStr.length > arr[0]?.length) arr = [newStr]
                newStr.length === arr[0]?.length && !arr.includes(newStr) ? arr.push(newStr) : ''
            }
            k++
        }

        // console.log((str1.length + 1 === str.length)
        if (str1.length === str.length - 2) break
        if (i === str.length - 1) i = -1, j++
    }

    return arr.join(', ')
}

console.log(longest_Palindromic_subString('babad'))