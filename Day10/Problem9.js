function even_odd_In_array(arr) {
    let even = 0, odd = 0

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 === 0) {
            even++; continue
        }
        odd++
    }

    return { even, odd }
}

console.log(even_odd_In_array([2, 5, 7, 8, 10]))