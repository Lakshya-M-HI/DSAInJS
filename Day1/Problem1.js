
function oneToN(num) {
    for (i = 1; i <= num; i++) {
        console.log(i)
    }
}

// Problem 1

// Approach 1
const userInput = parseInt(prompt('Enter a number to print from 1 to N'))


if (Number(userInput)) {
    oneToN(userInput)
} else {
    alert('Please a enter a valid number')
}


// Approach 2
const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', (e) => {
    if (parseInt(input.value.trim()))
        return oneToN(parseInt(input.value.trim()))

    alert('Please a enter a valid number')

})

