function replace_All_Occurrence(str, char, replace) {
    if (str.replace(char, replace) === str) return str
    str = str.replace(char, replace)
    return replace_All_Occurrence(str, char, replace)
}

console.log(replace_All_Occurrence("banana", "a", "x"))