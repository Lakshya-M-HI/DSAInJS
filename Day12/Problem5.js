function sort_array_of_Objects_by_Age(arr) {

    for (let i = 0; i < arr.length; i++) {

        let swaped = false
        for (let j = 1; j < arr.length - i; j++) {

            if (arr[j - 1]?.age > arr[j]?.age) {

                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
                swaped = true;
            }
        }

        if(!swaped) break;
    }

    return arr
}

console.log(sort_array_of_Objects_by_Age([
    { name: "A", age: 25 },
    { name: "B", age: 20 },
    { name: "C", age: 30 },
]))