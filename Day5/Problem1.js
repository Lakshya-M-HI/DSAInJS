const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    if (parseInt(input.value.trim())) return All_Factors_of_Number(parseInt(input.value.trim()))

    alert('Please enter a valid integer')
})

console.time()


// Approach1

function All_Factors_of_Number(num) {

    if (!Number(num)) return
    let arr = []
    let count = 0

    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            arr.splice(count, 0, i)
            num / i !== i ? arr.splice(count + 1, 0, num / i) : ''
            count++
        }
    }
    console.log(arr)
}
All_Factors_of_Number(100)


// Approach2

// function All_Factors_of_Number(num) {

//     if (!Number(num)) return
//     let arr = []

//     for (let i = 1; i <= num / 2; i++) {
//         if (num % i === 0) arr.push(i)
//     }
//     arr.push(num)
//     console.log(arr)
// }
// All_Factors_of_Number(24)


console.timeEnd()