const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    if (parseInt(input.value.trim())) return Alternating_Binary_Tree(parseInt(input.value.trim()))

    alert('Please enter a valid integer')
})

console.time()


// Approach1

function Alternating_Binary_Tree(Rows) {
    for (let i = 1; i <= Rows; i++) {
        let star = ''

        for (let j = Rows - i; j < Rows; j++) {

            let cond = ((Rows % 2 !== 0 && j % 2 === 0) || (Rows % 2 === 0 && j % 2 !== 0))

            if (i % 2 !== 0 && cond) {
                star += '1'
            } else if (i % 2 === 0 && cond) {
                star += '1'
            } else {
                star = star + '0'
            }

        }
        console.log(star)
    }
}
Alternating_Binary_Tree(5)




console.timeEnd()