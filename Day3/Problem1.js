const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    if (parseInt(input.value.trim())) return Triangle_Type(parseInt(input.value.trim()))

    alert('Please enter a valid integer')
})

console.time()


// Approach1

function Right_Angle_star_Triangle(Rows) {
    for (let i = 1; i <= Rows; i++) {
        let star = ''
        for (let j = 1; j <= i; j++) {
            star += '*'
        }
        console.log(star)
    }
}
Right_Angle_star_Triangle(5)



console.timeEnd()