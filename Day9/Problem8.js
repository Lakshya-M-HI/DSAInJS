let loopcount = 0

function areAnagrams(str1, str2) {

    if (str1.length !== str2.length) return false

    const freq_str1 = {}
    const freq_str2 = {}

    for (let i = 0; i < str1.length; i++) {
        loopcount++
        freq_str1[str1[i]] = (freq_str1[str1[i]] || 0) + 1
        freq_str2[str2[i]] = (freq_str2[str2[i]] || 0) + 1
    }

    // console.log(freq_str1, freq_str2)


    if (Object.keys(freq_str1).length !== Object.keys(freq_str2).length) return false

    let length = Object.keys(freq_str1).length

    for (let i = 0; i < length; i++) {
        loopcount++
        const key = Object.keys(freq_str1)[i]
        if (freq_str1[key] !== freq_str2[key]) return false;
    }

    return true;
}


function all_Anagram_pairs(arr) {
    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        loopcount++
        if (!newArr.includes(arr[i])) {

            let j = i + 1
            while (arr[j]) {
                loopcount++
                let anagrams = areAnagrams(arr[i], arr[j])
                if (anagrams) {
                    !newArr.includes(arr[i])
                        ? newArr.push(arr[i], arr[j])
                        : newArr.push(arr[j])
                }
                j++
            }
        }


    }

    return newArr
}

console.log(all_Anagram_pairs(["cat", "tac", "act", "dog"]))

console.log(loopcount)