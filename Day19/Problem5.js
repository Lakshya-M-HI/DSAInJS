function all_keys_in_nested_Loops(object) {
    for (const key in object) {
        if (typeof object[key] === "object") {
            all_keys_in_nested_Loops(object[key])
        } else if(typeof object[key] === "string"){
            object[key] = object[key].toUpperCase()
        }
    }

    return object
}

console.log(all_keys_in_nested_Loops({
    name: "john",
    details: {
        city: "mumbai",
        role: "dev"
    }
}))