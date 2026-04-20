function string_contains_only_Alphabets(str) {
    for (i = 0; i < str.length; i++) {
        let string = str[i].toLowerCase()

        if (!(string.charCodeAt() >= 97 && string.charCodeAt() <= 122)) {
            return 'Not only Alphabets'
        }
    }
    return 'Only Alphabets'
}

console.log(string_contains_only_Alphabets('HelloWorld'))