function unique_pairs(arr, target) {
    let pairs = {}

    for (let i = 0; i < arr.length; i++) {

        let index = arr.indexOf(target - arr[i])

        if (index >= 0 && arr[index] !== arr[i]) {

            !Object.keys(pairs).includes(`${arr[i]}`) && !Object.values(pairs).includes(`${arr[i]}`)
                && !Object.keys(pairs).includes(`${arr[index]}`) && !Object.values(pairs).includes(`${arr[index]}`)
                ? pairs[arr[i]] = arr[index]
                : ''
        }
    }

    let str = ''
    Object.keys(pairs).forEach((key, index) => {
        str += Object.keys(pairs)[index + 1] ? `(${key} ${pairs[key]}), ` : `(${key} ${pairs[key]})`
    })

    return str ? str : 'No-pairs'
}

console.log(unique_pairs([1, 2, 3, 4, 5], 6))