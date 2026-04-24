function Alphabetically_bubble_Sort(str) {
    let newStr = str.split('')

    for (let i = 0; i < newStr.length; i++) {

        let swaped = false

        for (let j = 1; j < newStr.length - i; j++) {

            if (newStr[j - 1]?.toLowerCase() > newStr[j]?.toLowerCase()) {

                [newStr[j - 1], newStr[j]] = [newStr[j], newStr[j - 1]]

                swaped = true;
            }
        }

        if (!swaped) break;
    }

    return newStr.join('')
}

console.log(Alphabetically_bubble_Sort("javascript"))