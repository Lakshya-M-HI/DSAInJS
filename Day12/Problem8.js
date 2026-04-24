function Alphabetically_bubble_Sort(arr) {

    for (let i = 0; i < arr.length - i; i++) {

        let swaped = false

        for (let j = 1; j < arr.length - i; j++) {

            if (arr[j - 1]?.toLowerCase() > arr[j]?.toLowerCase()) {

                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]

                swaped = true;
            }
        }

        if (!swaped) break;
    }

    return arr
}

console.log(Alphabetically_bubble_Sort(['b', 'A', 'd', 'C']))