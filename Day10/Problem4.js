function remove_ALL_duplicates(arr) {
    let filtered = []
    arr.filter((item) => !filtered.includes(item) ? filtered.push(item) : '')

    return filtered
}

console.log(remove_ALL_duplicates([1, 2, 2, 3, 3, 4]))