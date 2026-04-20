const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    if (parseInt(input.value.trim())) return Diamond_Pattern(parseInt(input.value.trim()))

    alert('Please enter a valid integer')
})

console.time()


// Approach1

function Rhombus_pattern(Rows) {

    for (let i = 0; i < Rows; i++) {

        let spaces = Rows - i - 1

        console.log(' '.repeat(spaces) + '*'.repeat(Rows))


    }
}

Rhombus_pattern(5)

console.timeEnd()