const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    if (parseInt(input.value.trim())) return strongNumber(parseInt(input.value.trim()))

    alert('Please enter a valid integer')
})

console.time()


// Approach1

function strongNumber(num) {
    let newNum = 0
    let original = num
    while (num > 0) {
        let number = 1
        num % 10
        for (let i = num % 10; i > 0; i--) {
            number *= i
        }
        newNum += number
        num = Math.floor(num / 10)
    }
    original === newNum ? console.log('Strong Number') : console.log('Not a strong number')
}
strongNumber(145)
console.timeEnd()