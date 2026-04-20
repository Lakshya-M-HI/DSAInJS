const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    if (parseInt(input.value.trim())) return Diamond_Pattern(parseInt(input.value.trim()))

    alert('Please enter a valid integer')
})

console.time()


// Approach1

function Hollow_Diamond(Rows) {

    for (let i = 0; i < 2 * Rows - 1; i++) {

        let StartingSpaces = i < Rows ? Rows - i - 1 : i - Rows + 1
        let middleSpaces = i > 0 && i < (2 * Rows) - 2
            ? i < Rows
                ? 2 * i - 1 :
                2 * (Rows - 1 - StartingSpaces) - 1
            : 0

        console.log(' '.repeat(StartingSpaces) + '*' + ' '.repeat(middleSpaces) + (middleSpaces ? '*' : ''))


    }
}

Hollow_Diamond(3)

console.timeEnd()