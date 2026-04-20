function firstRepeatingElement(arr) {

    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) return true

        }
    }

    return false
}

function longestSubarray_with_no_repeating(arr) {

    for (let i = arr.length - 3; i >= 0; i--) {

        for (let k = 0; k < arr.length - i; k++) {
            let newArr = arr.slice(k, i + 1 + k)
            
            let repeat = firstRepeatingElement(newArr)

            if (!repeat) {
                let j = 0

                while (j < arr.length) {

                    if (j >= k && j < i + 1 + k) {
                        j++
                        continue;
                    };

                    // console.log(arrSum + arr[j])
                    if (!newArr.includes(arr[j])) {
                        newArr.push(arr[j])
                        return newArr.length
                    }
                    j++
                }
            }
            
            if (!repeat) return newArr.length
        }
    }

    return false

}

console.log(longestSubarray_with_no_repeating([1, 2, 3, 1, 2, 3, 4]))
