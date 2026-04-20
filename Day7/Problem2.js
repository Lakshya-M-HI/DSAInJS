
function isPrime(num) {

    if (num <= 1) return false
    if (num === 2) return true
    if (num % 2 === 0) return false

    for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0) return false
    }
    return true
}


// Approach 1


function factorization_in_Exponent_form(num) {
    let factors = {}
    let original = num

    for (let i = 2; i ** 2 <= original; i++) {

        if (num % i === 0 && isPrime(i) && isPrime(num / i)) {
            factors[num / i] ? factors[num / i]++ : factors[num / i] = 1
            factors[i] ? factors[i]++ : factors[i] = 1
            break

        } else if (num % i === 0 && isPrime(i)) {
            num = num / i
            factors[i] ? factors[i]++ : factors[i] = 1
            i--
        }
    }

    let str = ''
    let length = Object.keys(factors).length


    for (const key in factors) {

        if (Object.keys(factors)[length - 1] !== key) {
            str += `${key}^${factors[key]} x `
        } else {
            str += `${key}^${factors[key]}`
        }
    }

    return str

}

console.log(factorization_in_Exponent_form(360))

