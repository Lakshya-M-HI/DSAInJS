function remove_duplicate_char(str) {
    let newStr = ''

    Array.from(str).forEach(item => {
        !newStr.includes(item)
            ? newStr += item
            : ''
    });
    return newStr
}

console.log(remove_duplicate_char('programming'))