// Approach 1

function Ugly_number(num) {

    if(num<=1) return 'Not a ugly number'

   for (const f of [2,3,5]) {
    while(num % f === 0){
        num /= f
    }
   }

   return num === 1? 'Ugly number' : 'Not a ugly number' 
}

console.log(Ugly_number(18))



// Approach 2

// function Ugly_number(num) {
//     let factors = [2, 3, 5]

//     for (let i = 2; i * i <= num; i++) {
        
//         if (num % i === 0 && !factors.includes(i)) return 'Not a ugly number'

//         while (num % i === 0) {
//             num /= i
//         }

//     }

//     if (num > 1) return factors.includes(num) ? 'Ugly number' : 'Not a ugly number'

//     return 'Ugly number'
// }

// console.log(Ugly_number(30))