const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    if (parseInt(input.value.trim())) return sum_of_digits(parseInt(input.value.trim()))

    alert('Please enter a valid integer')
})

console.time()


// Approach1

function sum_of_digits(num) {
    let newNum = 0
    while (num > 0) {
        newNum += num % 10
        num = Math.floor(num / 10)
    }
    console.log(newNum)
}
sum_of_digits(987)
console.timeEnd()