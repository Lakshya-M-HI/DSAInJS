// Brute force - try many times

const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    if (parseInt(input.value.trim())) return Vowel_or__Consonants(parseInt(input.value.trim()))

    alert('Please enter a valid integer')
})

console.time()
// Approach1

// function Vowel_or__Consonants(char = '') {
//     let vowel = ['a', 'e', 'i', 'o', 'u']

//     // if (!char) return

//     if (vowel.includes(char.toLowerCase())) {
//         console.log(char, 'is a vowel')
//         return
//     } else if (/[a-z]/.test(char.toLowerCase())) {
//         console.log(char, 'is a consonant')
//         return
//     }
//     console.log('Not a valid input!')
// }
// Vowel_or__Consonants('A')
// Vowel_or__Consonants()



// Approach2

// function Vowel_or__Consonants(char = '') {

//     if ('aeiou'.includes(char.toLowerCase()) && char !== '') {
//         console.log(char, 'is a vowel')
//         return
//     } else if (/[a-z]/.test(char.toLowerCase())) {
//         console.log(char, 'is a consonant')
//         return
//     }
//     console.log('Not a valid input!')
// }
// Vowel_or__Consonants('A')


// ASCII solution

// Approach 3

function Vowel_or__Consonants(char = '') {

    if ('aeiou'.includes(char.toLowerCase()) && char !== '') {
        console.log(char, 'is a vowel')
        return
    } else if ((char.charCodeAt() >= 97 && char.charCodeAt() <= 122) && char.length === 1) {
        console.log(char, 'is a consonant')
        return
    }
    console.log('Not a valid input!')
}
Vowel_or__Consonants('A')


console.timeEnd()