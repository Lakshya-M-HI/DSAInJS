function subString_search(str, pattern) {
    let index;
    for (let i = 0; i < str.length; i++) {
        let j = 0
        if (str[i] === pattern[j]) {
            index = i;
            // console.log(index, i)

            while (str[i] === pattern[j]) {
                if (j === pattern.length - 1) return index
                i++, j++;
            }
        }
    }

    return 'Not found!'
}

console.log(subString_search('hello worldef', 'or'))