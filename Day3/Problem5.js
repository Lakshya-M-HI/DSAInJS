const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    if (parseInt(input.value.trim())) return Hollow_square_pattern(parseInt(input.value.trim()))

    alert('Please enter a valid integer')
})

console.time()


// Approach1

function Hollow_square_pattern(Rows) {
    for (let i = 1; i <= Rows; i++) {
        let star = ''

        for (let j = 0; j < Rows; j++) {
            if (star.length > Rows) continue
            star += '*'

            if (i > 1 && i < Rows) {
                for (let k = 1; k <= Rows - 2; k++) {
                    star += ' '
                }
            }
        }
        console.log(star)
    }
}
Hollow_square_pattern(5)



console.timeEnd()