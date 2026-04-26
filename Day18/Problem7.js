function number_Of_vowels_in_a_String(str, i = 0, count = 0) {

    if ('aeiou'.includes(str[i])) count++
    if (!str[i]) return count
    return number_Of_vowels_in_a_String(str, ++i, count)
}

console.log(number_Of_vowels_in_a_String("education"))