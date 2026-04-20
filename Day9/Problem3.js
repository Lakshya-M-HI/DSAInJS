function Rotation(str1, str2) {
    return (str1 + str1).includes(str2)
        ? true
        : false
}

console.log(Rotation('abcde', 'cdeab'))