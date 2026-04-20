// Brute force - try many times

const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    if (parseInt(input.value.trim())) return ElectricityBill(parseInt(input.value.trim()))

    alert('Please enter a valid integer')
})

console.time()
// Approach1

// function ElectricityBill(unit) {

//     if (unit < 0) return

//     let bill
//     if (unit <= 100n) {
//         bill = unit * 5n
//         console.log('₹' + bill)
//     } else if (unit > 100n && unit <= 200n) {
//         bill = 500n + ((unit - 100n) * 7n)
//         console.log('₹' + bill)
//     } else if (unit > 200n && unit <= 300n) {
//         bill = 1200n + ((unit - 200n) * 10n)
//         console.log('₹' + bill)
//     } else {
//         bill = 2200n + ((unit - 300n) * 12n)
//         console.log('₹' + bill)
//     }

// }
// ElectricityBill(250n)


// More complex
// Approach 2

// function ElectricityBill(unit) {

//     if (unit <= 0) return

//     let slabs = [{ slab: 100, rate: 5 }, { slab: 200, rate: 7 }, { slab: 300, rate: 10 }, { slab: Infinity, rate: 12 },]
//     let bill = 0

//     for (let i = 0; i < slabs.length; i++) {
//         if (unit >= slabs[i].slab) {
//             bill += 100 * slabs[i]?.rate
//             // console.log(bill)
//         } else {
//             bill += (unit - (i - 1 >= 0 ? slabs[i - 1].slab : 0)) * slabs[i].rate
//             break
//             // console.log(bill)
//         }
//     }
//     console.log('₹', bill)

// }
// ElectricityBill(230)




// Approach 3

function ElectricityBill(unit) {

    if (unit <= 0) return

    let slabs = [{ slab: 100, rate: 5 }, { slab: 200, rate: 7 }, { slab: 300, rate: 10 }, { slab: Infinity, rate: 12 },]
    let bill = 0

    for (let i = slabs.length - 1; i >= 0; i--) {

        const slabValue = i - 1 >= 0 ? slabs[i - 1].slab : 100

        if (unit > slabValue) {
            bill += (unit - slabs[i - 1].slab) * slabs[i].rate
            unit = slabs[i - 1].slab
            // console.log(bill)
        } else {

            if (unit > 100) continue

            bill += unit * 5
            break
            // console.log(bill)
        }
    }
    console.log('₹', bill)

}
ElectricityBill(230)


console.timeEnd()