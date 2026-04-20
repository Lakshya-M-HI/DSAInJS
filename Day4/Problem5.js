const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    if (parseInt(input.value.trim())) return Triangle_Type(parseInt(input.value.trim()))

    alert('Please enter a valid integer')
})

console.time()


// Approach1

function generate_decimal_number(whole, fraction) {
    let wholeNum = 0
    let fractionNum = 0
    for (let i = 0; i < Math.max(whole.length, fraction.length); i++) {
        if (whole[i]) {
            wholeNum += whole[i] * 10 ** (whole.length - 1 - i)
        }
        if (fraction[i]) {
            fractionNum += fraction[i] * 10 ** (fraction.length - 1 - i)
        }
    }
    const num = wholeNum + fractionNum / 10 ** fraction.length

    console.log(num)
}
generate_decimal_number([1, 2], [0, 1])

console.timeEnd()

