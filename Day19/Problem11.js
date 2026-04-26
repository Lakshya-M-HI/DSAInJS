function total_number_of_keys(object, target, str = "") {
    for (const key in object) {

        if (key === target) {
            str += `${key}`
            return str
        }

        if (typeof object[key] === "object" & object[key] !== null) {
            
            str = total_number_of_keys(object[key], target, str)

            if (str.includes(target)) str = `${key}.` + str
        }
    }

    return str
}

console.log(total_number_of_keys({
    a: {},
    b: {
        c: {},
        d: {
            e: {},
            f: 5
        }
    }
}, "e"))