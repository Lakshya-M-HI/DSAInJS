const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    if (parseInt(input.value.trim())) return Perfect_Number(parseInt(input.value.trim()))

    alert('Please enter a valid integer')
})

console.time()


// Approach1

function Perfect_Number(num) {

    if (!Number(num)) return
    let sum = 0

    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            sum += i
            i !== 1 && num / i !== i ? sum += num / i : ''
        }
    }
    console.log(sum)
    sum === num ? console.log('Perfect number') : console.log('Not a perfect number')

}
Perfect_Number(28)


console.timeEnd()