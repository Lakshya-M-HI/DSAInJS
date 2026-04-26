function character_appears_in_a_Strign(str, char, i = 0, count = 0) {
    if (!str[i]) return count
    if (str[i] === char) count++
    return character_appears_in_a_Strign(str, char, ++i, count)
}

console.log(character_appears_in_a_Strign("recursion", "r"))