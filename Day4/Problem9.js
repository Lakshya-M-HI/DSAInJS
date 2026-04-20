const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    if (parseInt(input.value.trim())) return average_of_digits(parseInt(input.value.trim()))

    alert('Please enter a valid integer')
})

console.time()


// Approach1

function average_of_digits(num) {
    let newNum = 0
    let count = 0
    while (num > 0) {
        count++
        newNum += num % 10
        num = Math.floor(num / 10)
    }
    console.log(newNum / count)
}
average_of_digits(4567)
console.timeEnd()