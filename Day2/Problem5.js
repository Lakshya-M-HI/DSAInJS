// Brute force - try many times

const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    if (parseInt(input.value.trim())) return leap_Year(parseInt(input.value.trim()))

    alert('Please enter a valid integer')
})

console.time()


// Approach1


function leap_Year(year) {

    if (!year) return

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log('leap year')
        return
    }
    console.log('Not a leap year')
}
leap_Year(2028)


console.timeEnd()