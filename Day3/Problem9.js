const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    if (parseInt(input.value.trim())) return Butterfly_Pattern(parseInt(input.value.trim()))

    alert('Please enter a valid integer')
})

console.time()


// Approach1

function Butterfly_Pattern(Rows) {
    for (let i = 1; i <= 2 * Rows - 1; i++) {
        let star = ''

        for (let j = 1; j <= 2 * Rows - 1; j++) {

            if (i <= Rows && (j <= i || j > 2 * Rows - 1 - i)) {
                star += '*'
            } else if (i > Rows && (j <= 2 * Rows - i || j >= i)) {
                star += '*'
            } else {
                star += ' '
            }
        }

        console.log(star)
    }
}
Butterfly_Pattern(5)




console.timeEnd()