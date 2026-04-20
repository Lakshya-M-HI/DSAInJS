function firstRepeatingElement(arr) {

    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) return 'First Repeating Element:', arr[i]

        }
    }

    return false
}

console.log(firstRepeatingElement([10, 5, 3, 4, 3, 5, 6]))