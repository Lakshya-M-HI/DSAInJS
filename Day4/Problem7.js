const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    if (parseInt(input.value.trim())) return Triangle_Type(parseInt(input.value.trim()))

    alert('Please enter a valid integer')
})

console.time()


// Approach1

function ArmstrongNumber(num) {
    let arr = []
    const originalNumber = num
    let newNum = 0
    while (num > 0) {
        arr.unshift(num % 10)
        num = Math.floor(num / 10)
    }

    for (let i = 0; i < arr.length; i++) {
        newNum += arr[i] ** arr.length
    }

    originalNumber === newNum ? console.log('Armstrong') : console.log('Not a armstrong')
}
ArmstrongNumber(153)
console.timeEnd()

