function longestSubarray(arr, target) {

    arr.sort()

    function sum(arr) {
        let sum = 0

        for (let i = 0; i < arr.length; i++) {
            sum += arr[i]
        }

        return sum
    }

    for (let i = arr.length - 3; i >= 0; i--) {


        for (let k = 0; k < arr.length - i; k++) {
            let newArr = arr.slice(k, i + 1 + k)
            let arrSum = sum(newArr)
            // console.log(arrSum)

            if (arrSum <= target) {
                // console.log(true)
                let j = 0

                while (arrSum + arr[j] <= target && j < arr.length) {

                    if (j >= k && j < i + 1 + k) {
                        j++
                        continue;
                    };

                    // console.log(arrSum + arr[j])
                    if (arrSum + arr[j] === target) {
                        newArr.push(arr[j])
                        return newArr
                    }
                    j++
                }
            }

            if (arrSum === target) return newArr
        }
    }

    return false

}

console.log(longestSubarray([1, 2, 4, 4, 5], 9))