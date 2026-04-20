
// Brute force - try many times

const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    if (parseInt(input.value.trim())) return Postive_Negative_or_Zero(parseInt(input.value.trim()))

    alert('Please enter a valid integer')
})

console.time()
// Approach1

function Postive_Negative_or_Zero(num) {
    if (num > 0) {
        console.log('Positive')
    } else if (num < 0) {
        console.log('Negative')
    } else if (num === 0) {
        console.log('Zero')
    }
}
Postive_Negative_or_Zero(1)


console.timeEnd()