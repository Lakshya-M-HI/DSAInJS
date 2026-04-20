const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    if (parseInt(input.value.trim())) return Triangle_Type(parseInt(input.value.trim()))

    alert('Please enter a valid integer')
})

console.time()


// Approach1

function seperate_whole_and_fractional_part(num) {

    let fractionalPart = Number((num % 1).toFixed(10))
    let wholePart = Number((num - fractionalPart).toFixed(10))

    console.log(wholePart, fractionalPart)
    return {wholePart, fractionalPart }
}
seperate_whole_and_fractional_part(12.34)

console.timeEnd()

