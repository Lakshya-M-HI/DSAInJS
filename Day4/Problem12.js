const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    if (parseInt(input.value.trim())) return automorphic(parseInt(input.value.trim()))

    alert('Please enter a valid integer')
})

console.time()


// Approach1

function automorphic(num) {
    let count = 0
    let original = num
    while (num > 0) {
        count++
        num = Math.floor(num / 10)
    }
    original === (original ** 2) % (10 ** count )? console.log('Automorphic Number') : console.log('Not a Automorphic number')
}
automorphic(25)
console.timeEnd()