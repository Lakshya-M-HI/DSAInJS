function linearSearch(arr, element) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) return i
    }

    return false
}

console.log(linearSearch([4, 2, 7, 1, 9], 7))