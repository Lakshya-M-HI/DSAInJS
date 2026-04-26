
function print_numbers(arr, i=0) {

    if (i === arr.length) return 1
    console.log(arr[i++])
    return print_numbers(arr) 
}
print_numbers([1, 2, 3, 4])