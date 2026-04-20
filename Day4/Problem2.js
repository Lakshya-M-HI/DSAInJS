const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    if (parseInt(input.value.trim())) return Reverse(parseInt(input.value.trim()))

    alert('Please enter a valid integer')
})

console.time()



// Approach1

function Reverse(num) {
    let arr = []
    let newNum = 0
    while (num > 0) {
        arr.push(num % 10)
        num = Math.floor(num / 10)
    }
    for (let i = 0; i < arr.length; i++) {
        newNum += arr[i] * 10 ** (arr.length - 1 - i)
    }
    console.log(newNum)
}
Reverse(1234)

console.timeEnd()