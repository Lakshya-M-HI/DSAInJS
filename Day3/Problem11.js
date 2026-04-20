const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    if (parseInt(input.value.trim())) return Diamond_Pattern(parseInt(input.value.trim()))

    alert('Please enter a valid integer')
})

console.time()


// Approach1

function Hourglass_pattern(n) {

    for (let i = 0; i < 2 * n - 1; i++) {

        let spaces = i < n ? i : 2 * n - i - 2
        let star = 2 * (n - spaces) - 1

        console.log(' '.repeat(spaces) + '*'.repeat(star))
    }
}

Hourglass_pattern(5)

console.timeEnd()