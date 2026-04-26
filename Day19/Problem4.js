function all_keys_in_nested_Loops(object) {
    for (const key in object) {
        console.log(key)
        if (typeof object[key] === "object") {
            all_keys_in_nested_Loops(object[key])
        }
    }
}

console.log(all_keys_in_nested_Loops({
    a: {
        b: {
            c: 1
        }
    }
}))