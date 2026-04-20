const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    if (parseInt(input.value.trim())) return Diamond_Pattern(parseInt(input.value.trim()))

    alert('Please enter a valid integer')
})

console.time()


// Approach1

// function number(n) {

//     if (!Number(n)) return

//     for (let i = 1; i <= 10; i++) {

//         console.log(`${n} x ${i} = ${n * i}`)

//     }
// }

// number(5)



function upto(n) {

    if (!Number(n)) return

    for (let i = 1; i <= n; i++) {

        console.log(`Table of ${i}`)
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} x ${j} = ${i * j}`)
        }

    }
}

upto(5)

console.timeEnd()