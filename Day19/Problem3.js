function sum_Of_all_numeric_values(object, sum = 0) {
    for (const key in object) {
        if (typeof object[key] === "number") {
            sum += object[key]
        } else if (typeof object[key] === "object") {
            return sum_Of_all_numeric_values(object[key], sum)
        }
    }

    return sum
}

console.log(sum_Of_all_numeric_values({
    x: 10,
    y: {
        z: 5,
        w: {
            k: 15
        }
    }
}))