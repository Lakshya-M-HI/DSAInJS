function gcd(a, b) {

    if (a > b) { 
        b = a; 
        a = b 
    }
    if (a === 0) return b

    while (b % a !== 0) {
        let rem = b % a
        b = a
        a = rem
    }
    return a
}
 
function co_prime(a, b) {
    return gcd(a, b) === 1
}
console.log(co_prime(7, 0))