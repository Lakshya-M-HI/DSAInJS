function count_Number_Of_words(str) {
    let arr = Array.from(str)
    let count = 0

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === ' ' && arr[i] !== arr[i - 1]) count++
    }
    if (arr[arr.length - 1] !== ' ') count++

    return count
}

console.log(count_Number_Of_words(' v dxgf mbvgfj gjv yby khtyu u6576 886'))