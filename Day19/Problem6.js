function total_number_of_keys(object, search, count = 0) {
    for (const key in object) {

        if (key === search) count++
        if (typeof object[key] === "object" && object[key] !== null) {
            return total_number_of_keys(object[key],search, count)
        }
    }

    return count
}

console.log(total_number_of_keys({
    a: 1,
    b: {
        a: 2,
        c: {
            a: 3
        }
    }
}, "a"))