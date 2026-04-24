function areAnagrams(str1, str2) {

    if (str1.length !== str2.length) return false

    const freq_str1 = {}
    const freq_str2 = {}

    for (let i = 0; i < str1.length; i++) {
        freq_str1[str1[i]] = (freq_str1[str1[i]] || 0) + 1
        freq_str2[str2[i]] = (freq_str2[str2[i]] || 0) + 1
    }

    // console.log(freq_str1, freq_str2)


    if (Object.keys(freq_str1).length !== Object.keys(freq_str2).length) return false

    let length = Object.keys(freq_str1).length

    for (let i = 0; i < length; i++) {
        const key = Object.keys(freq_str1)[i]
        if (freq_str1[key] !== freq_str2[key]) return false;
    }

    return 'Anagram';
}

console.log(areAnagrams('listen', 'silent'))