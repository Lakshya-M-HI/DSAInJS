const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    if (parseInt(input.value.trim())) return eachDigit(parseInt(input.value.trim()))

    alert('Please enter a valid integer')
})

console.time()


// Approach1

function eachDigit(num) {
    let arr = []
    while (num > 0) {

        let found = arr.find(item => item.n === num % 10)
        if (found) {
            found.count++
        } else {
            arr.push({ n: num % 10, count: 1 })
        }
        num = Math.floor(num / 10)
    }

    arr.forEach(item => {
        console.log(`${item.n} -> ${item.count}`)
    })
    console.log(arr)

}
eachDigit(112233)






// Approach 2

function frequency_of_each_digit(num) {
    let frequency = {}
    while (num > 0) {
        let n = num % 10
        if (frequency[n]) {
            frequency[n] = frequency[n] + 1
        } else {
            frequency[n] = 1
        }
        num = Math.floor(num / 10)
    }
    console.log(frequency)

}
frequency_of_each_digit(112233)

console.timeEnd()