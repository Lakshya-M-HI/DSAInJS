function total_number_of_keys(object, target) {
    for (const key in object) {

        if (object[key] === target) {
            return true
        }

        if (typeof object[key] === "object" && object[key] !== null) {
            if (total_number_of_keys(object[key], target) === true) return true
        }
    }

    return false
}

console.log(total_number_of_keys({
    name: "A",
    b: {},
    info: {
        age: 25,
        address: {
            city: "Delhi"
        }
    }
}, "Delhi"))