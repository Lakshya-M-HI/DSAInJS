function find_all_indexes_Of_an_element(arr, element) {

   
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]?.id === element) return arr[i]
    }

    return false
}

console.log(find_all_indexes_Of_an_element([
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 3, name: "C" },
], 2))