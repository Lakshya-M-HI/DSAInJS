function find_all_indexes_Of_an_element(arr, element) {

   
    for (let i = 0; i < arr.length; i++) {

        const includ = arr[i].indexOf(element)
        if (includ >= 0) return `Found at position ${i} ${includ}`
    }

    return false
}

console.log(find_all_indexes_Of_an_element([
  [1, 2],
  [3, 4],
  [5, 6]
], 4))