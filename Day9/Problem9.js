function firstRepeatingElement(str) {

    for (let i = 0; i < str.length; i++) {

        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) return true

        }
    }

    return false
}

function longest_Substring_with_no_repeating(str) {

    for (let i = str.length - 3; i >= 0; i--) {

        for (let k = 0; k < str.length - i; k++) {
            let newstr = str.slice(k, i + 1 + k)
            
            let repeat = firstRepeatingElement(newstr)

            if (!repeat) {
                let j = 0

                while (j < str.length) {

                    if (j >= k && j < i + 1 + k) {
                        j++
                        continue;
                    };

                    // console.log(strSum + str[j])
                    if (!newstr.includes(str[j])) {
                        newstr.push(str[j])
                        return newstr
                    }
                    j++
                }
            }
            
            if (!repeat) return newstr
        }
    }

    return false

}

console.log(longest_Substring_with_no_repeating("abcabcbb"))
