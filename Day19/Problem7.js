function total_number_of_keys(object, count = 1) {
    for (const key in object) {

        if (typeof object[key] === "object" && object[key] !== null) {
            count++
            return total_number_of_keys(object[key], count)
        }
    }

    return count
}

console.log(total_number_of_keys({
    a: {
        b: {
            c: {
                d: 1
            }
        }
    }
}))