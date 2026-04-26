function length_Of_a_String(str, length = 0) {

    if (str[length]) return length = length_Of_a_String(str, length + 1)
    return length
}

console.log(length_Of_a_String("javascript"))