function element_Appears_In_array(arr, element) {
    return (arr.filter(ele => ele === element)).length
}

console.log(element_Appears_In_array([1, 2, 3, 4, 4, 4, 5], 4))