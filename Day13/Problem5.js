function sort_by_name(arr) {

    for (let i = 0; i < arr.length; i++) {

        let miniIndex = i
        for (let j = i + 1; j < arr.length; j++) {

             if (arr[j]?.name?.toUpperCase() < arr[miniIndex]?.name?.toUpperCase()){
                miniIndex = j
            }
        }

        if (miniIndex !== i) {
            [arr[i], arr[miniIndex]] = [arr[miniIndex], arr[i]]
        }
    }

    return arr
}

console.log(sort_by_name([{ name: "Charlie" }, { name: "ALice" }, { name: "Bob" }, { name: "boc" }, { name: "Za" }]))