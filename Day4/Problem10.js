const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    if (parseInt(input.value.trim())) return largestANDsmallest(parseInt(input.value.trim()))

    alert('Please enter a valid integer')
})

console.time()


// Approach1

function largestANDsmallest(num) {
    let newNum = 0
    let smallest = num % 10
    let largest = num % 10
    while (num > 0) {
        if (num % 10 > largest) {
            largest = num % 10
        } else if (num % 10 < smallest) {
            smallest = num % 10
        }
        num = Math.floor(num / 10)
    }
    console.log('smallest:', smallest, 'largest:', largest)
}
largestANDsmallest(9483)
console.timeEnd()