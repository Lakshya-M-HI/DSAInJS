function continues(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - 1 !== arr[i - 1]) return false
    }

    return true
}


function longest_Increasing_SubArray(arr) {

    for (let i = arr.length - 3; i >= 0; i--) {

        for (let k = 0; k < arr.length - i; k++) {
            let newArr = arr.slice(k, i + 1 + k)

            let cont = continues(newArr)

            if (cont) {
                let j = 0

                while (j < arr.length) {

                    if (j >= k && j < i + 1 + k) {
                        j++
                        continue;
                    };

                    // console.log(arrSum + arr[j])
                    if (arr[j] === newArr[newArr.length - 1] - 1) {
                        newArr.push(arr[j])
                        return { length: newArr.length, newArr }
                    }
                    j++
                }
            }

            if (cont) return { length: newArr.length, newArr }
        }
    }

    return false

}

console.log(longest_Increasing_SubArray([1, 2, 2, 3, 4, 5]))
