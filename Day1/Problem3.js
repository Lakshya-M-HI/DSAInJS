const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    if (parseInt(input.value.trim())) return Even_1toN(parseInt(input.value.trim()))

    alert('Please enter a valid integer')
})


function Even_1toN(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0 && i !== 0) {
            console.log(i)
        }
    }
}