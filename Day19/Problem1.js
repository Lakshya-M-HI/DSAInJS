function print_all_values(object) {
    for (const key in object) {
        if (typeof object[key] === "object") {
            print_all_values(object[key])
        } else {
            console.log(object[key])
        }
    }
}

console.log(print_all_values({
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3,
            f: {
                g: 'Hi'
            }
        }
    }
}))