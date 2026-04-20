function all_Substring_Of_a_string(str) {
    let arr = []

    for (let i = 0; i < str.length; i++) {
        arr.push(str[i])

        let j = i + 1
        while (str[j]) {
            arr.push(str[i] + str[j])
            j++
        }
    }

    return arr.join(', ')
}

console.log(all_Substring_Of_a_string('abc'))