const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    if (parseInt(input.value.trim())) return All_multiples_upto_N(parseInt(input.value.trim()))

    alert('Please enter a valid integer')
})

console.time()


// Approach1

function All_multiples_upto_N(num, limit) {

    if (!Number(num) && !Number(num)) return
    let arr = []

    for (let i = num; i <= limit; i += num) {
        arr.push(i)
    }
    console.log(arr)
}
All_multiples_upto_N(4, 30)


// Approach 2

// function All_multiples_upto_N(num, limit) {

//     if (!Number(num) && !Number(num)) return
//     let arr = []

//     for (let i = 1; num * i <= limit; i++) {
//         arr.push(num * i)
//     }
//     console.log(arr)
// }
// All_multiples_upto_N(4, 30)


console.timeEnd()