function max_Of_all_numeric_values(object, max = null) {
    for (const key in object) {

        if (!max && typeof object[key] === "number") max = object[key]

        if (typeof object[key] === "number" && object[key] > max) {
            max = object[key]

        } else if (typeof object[key] === "object") {
            return max_Of_all_numeric_values(object[key], max)
        }
    }

    return max
}

console.log(max_Of_all_numeric_values({
    a: 4,
    b: {
        c: 9,
        d: {
            e: 2
        }
    }
}))