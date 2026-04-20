const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    if (parseInt(input.value.trim())) return eachDigit(parseInt(input.value.trim()))

    alert('Please enter a valid integer')
})

console.time()


// Approach1

function HarshadNumber(num) {
    let newNum = 0
    let original = num
    while (num > 0) {
        newNum += num % 10
        num = Math.floor(num / 10)
    }
    original % newNum === 0 ? console.log('Harshad Number') : console.log('Not a harshad number')
}
HarshadNumber(18)
console.timeEnd()