// Brute force - try many times - not optimal

const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    const value = parseInt(input.value.trim())

    if (value && value < 100000)
        return Square(parseInt(input.value.trim()))

    alert('Number is too big')
})

console.time()

// Approach1

// It is not optimal because takes more than 5-9 sec

function Square(num) {
    for (let i = 1n; i <= num; i++) {
        console.log(i ** 2n)
        // console.log(i * i)
        // console.log(Math.pow(i, 2n))
    }
}
Square(10n)


console.timeEnd()