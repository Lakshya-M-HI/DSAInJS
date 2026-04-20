function reverse_Only_words(str) {
    let arr = str.split(' ')
    let newArr = []

    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }
    return newArr.join(' ')
}

console.log(reverse_Only_words('I love coding'))