const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    if (parseInt(input.value.trim())) return Greatest_factor(parseInt(input.value.trim()))

    alert('Please enter a valid integer')
})

console.time()


// Approach1

function Greatest_factor(num) {

    if (!Number(num)) return
    let number = 1

    if (num % 2 === 0) {
        console.log(num / 2)
        return
    }

    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0 && i !== 1 && num / i > number) {
            number = num / i
            console.log(number)
            return
        }
    }
    console.log(1)
    return 1
}
Greatest_factor(111)


console.timeEnd()