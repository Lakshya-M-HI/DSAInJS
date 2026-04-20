function substring_of_another(str, target) {
    for (let i = 0, j = 0; i < str.length; i++) {
        if (str[i] === target[j]) {

            while (str[i] === target[j] && j < str.length) {
                if (j === target.length - 1) return true
                i++, j++;
            }
        }
    }

    return false
}

console.log(substring_of_another('hellothere', 'there'))