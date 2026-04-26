function total_number_of_keys(object, count = 0) {
    for (const key in object) {

        count++
        if (typeof object[key] === "object" && object[key] !== null) {
            return total_number_of_keys(object[key], count)
        }
    }

    return count
}

console.log(total_number_of_keys({
    a: 1,
    t: null,
    b: {
        c: 2,
        d: {
            e: 3,
            f: 4
        }
    }
}))