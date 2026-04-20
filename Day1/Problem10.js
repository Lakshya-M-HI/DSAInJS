
const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    const value = parseInt(input.value.trim())

    if (value)
        return cube(parseInt(input.value.trim()))

    alert('Please enter a valid number!')
})

console.time()


// Apprach 1 

// It is not optimal because need normal traversal - O(n)

function cube(num) {
    for (let i = 1; i <= num; i++) {
        console.log(i ** 3)
    }
}
cube(100)


// Apprach 1 - same but stored in an array

// function cube(num) {
//     let cubes = Array.from({ length: num }, (_, i) => (i + 1) ** 3)
//     console.log(cubes)
// }
// cube(100000000)


console.timeEnd()