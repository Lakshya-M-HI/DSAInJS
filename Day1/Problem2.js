const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    if (parseInt(input.value.trim())) return NtoOne(parseInt(input.value.trim()))

    alert('Please enter a valid integer')
})




// Approach 1

// function NtoOne(num) {
//     for (let i = num; i >= 1; i--) {
//         console.log(i)
//     }
// }




// Approach 2

function NtoOne(num) {
    for (let i = 1; i <= num; i++) {
        console.log(num - i + 1)
    }
}