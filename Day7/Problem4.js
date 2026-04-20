function Powerful_Number(num) {
    let loop = 0

    if (num % 2 === 0) {
        let count = 0
        while (num % 2 === 0) {
            loop++
            num /= 2
            count++
        }
        if (count < 2) return false
    }

    for (let i = 3; i * i <= num; i += 2) {
        loop++
        if (num % i === 0) {
            let count = 0
            while (num % i === 0) {
                loop++
                num /= i
                count++
            }
            if (count < 2) return false
        }
    }

    if (num > 1) return false
    return true
}
console.log(Powerful_Number(49))
