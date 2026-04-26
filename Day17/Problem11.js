let arr = []

function numbers_bw_1toN(start, end) {
    if (start > end) return
    // console.log(start)
    arr.push(start)
    numbers_bw_1toN(start + 1, end)

    return arr.join(' ')
}

console.log(numbers_bw_1toN(3,8))