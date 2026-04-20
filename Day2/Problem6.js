// Brute force - try many times

const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    if (parseInt(input.value.trim())) return leap_Year(parseInt(input.value.trim()))

    alert('Please enter a valid integer')
})

console.time()


// Approach1

function checkCharacter(char) {

    if (!char) return

    if (/[0-9]/.test(char)) {
        console.log('Digit')
        return
    }

    let value = char.charCodeAt()

    if ((value >= 33 && value <= 47) || (value >= 58 && value <= 64) || (value >= 91 && value <= 96) || (value >= 123 && value <= 126)) {
        console.log('Special character')
    } else if (value >= 65 && value <= 90) {
        console.log('UppereCase alphabet')
    } else if (value >= 97 && value <= 122) {
        console.log('LowerCase alphabet')
    }
}
checkCharacter('A')


console.timeEnd()