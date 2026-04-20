function longest_word(str) {
    let arr = str.split(' ')
    let big = { size: 0 }

    arr.forEach((item, index) => {
        if (item.length > big.size) {
            big.index = index;
            big.size = item.length;
        }
    });

    return arr[big.index]
}

console.log(longest_word('coding is beautiful'))