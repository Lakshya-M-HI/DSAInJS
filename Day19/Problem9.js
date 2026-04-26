function total_number_of_keys(object, replace, target) {
    for (const key in object) {

        if (replace[key]) {
            object[key] = target
        }

        if (typeof object[key] === "object" && object[key] !== null) {
            total_number_of_keys(object[key], replace, target)
        }
    }

    return object
}

console.log(total_number_of_keys({
    name: "A",
    info: {
        age: 25,
        address: {
            city: "Delhi"
        }
    }
}, { city: "Delhi" }, "Bangalore"))