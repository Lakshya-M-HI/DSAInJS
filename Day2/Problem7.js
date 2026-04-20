const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    if (parseInt(input.value.trim())) return Triangle_Type(parseInt(input.value.trim()))

    alert('Please enter a valid integer')
})

console.time()


// Approach1

function Triangle_Type(a, b, c) {

    if (!a || !b || !c) return

    if (a === b && a === c) {
        console.log('Equilateral triangle')
    } else if (a === b || b === c || a === c) {
        console.log('Isosceles trianlge')
    } else if (a ** 2 + b ** 2 === c ** 2) {
        console.log('Right angle triangle')
    } else {
        console.log('Scalene')
    }
}

Triangle_Type(5, 5, 5)


console.timeEnd()