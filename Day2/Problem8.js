const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    if (parseInt(input.value.trim())) return Triangle_Type(parseInt(input.value.trim()))

    alert('Please enter a valid integer')
})

console.time()


// Approach1

function Income_Tax(income) {
    if (!income || !Number(income)) return

    if (income >= 250000n && income <= 500000n) {
        console.log('Tax:', 5n * (income - 250000n) / 100n)
    } else if (income >= 500000n && income <= 1000000n) {
        console.log('Tax:', 12500n + (20n * (income - 500000n) / 100n))
    } else if (income > 1000000n) {
        console.log('Tax:', 112500n + 30n * (income - 1000000n) / 100n)
    } else {
        console.log('No Tax')
    }
}
Income_Tax(750000n)

console.timeEnd()