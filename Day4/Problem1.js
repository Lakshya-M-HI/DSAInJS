const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    if (parseInt(input.value.trim())) return Triangle_Type(parseInt(input.value.trim()))

    alert('Please enter a valid integer')
})

console.time()


// Approach1

function split_NumbersInto_Digit(num) {
    let arr = []

    while (num > 0) {
        arr.unshift(num % 10)
        num = Math.floor(num / 10)
    }
    console.log(arr)

}
split_NumbersInto_Digit(12345)

console.timeEnd()