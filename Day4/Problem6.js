const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    if (parseInt(input.value.trim())) return Triangle_Type(parseInt(input.value.trim()))

    alert('Please enter a valid integer')
})

console.time()


// Approach1

function Palindrome(num) {
    let arr = []
    const oldNum = num
    let newNum = 0
    while (num > 0) {
        arr.push(num % 10)
        num = Math.floor(num / 10)
    }

    for (let i = 0; i < arr.length; i++) {
        newNum += arr[i] * 10 ** (arr.length - 1 - i)
    }
    oldNum === newNum ? console.log('Palindrome') : console.log("Not a palindrome")
}
Palindrome(123)

console.timeEnd()

