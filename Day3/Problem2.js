const input = document.querySelector('#input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

    if (parseInt(input.value.trim())) return Inverted_Right_Angle_star_Triangle(parseInt(input.value.trim()))

    alert('Please enter a valid integer')
})

console.time()


// Approach1

function Inverted_Right_Angle_star_Triangle(Rows) {
    for (let i = 1; i <= Rows; i++) {
        let star = ''
        for (let j = i; j <= Rows; j++) {
            star += '*'
        }
        console.log(star)
    }
}
Inverted_Right_Angle_star_Triangle(5)



console.timeEnd()