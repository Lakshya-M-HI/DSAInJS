function sort_strings_Array_by_Length(arr) {

    for (let i = 0; i < arr.length; i++) {

        let swaped = false;
        for (let j = 1; j < arr.length; j++) {

            if (arr[j - 1]?.length > arr[j]?.length) {
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
            }
        }

        if (!swaped) break;
    }

    return arr
}

console.log(sort_strings_Array_by_Length(["hi", "javascript", "is", "fun"]))