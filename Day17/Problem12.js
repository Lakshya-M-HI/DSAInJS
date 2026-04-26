let sum = 0
function sum_Of_even_Numbers(num) {

    if (num % 2 === 0) sum += num
    if (num > 2) sum_Of_even_Numbers(num - 1)

    return sum
}

console.log(sum_Of_even_Numbers(10))