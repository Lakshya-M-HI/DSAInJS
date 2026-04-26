function countTreeNodes(node) {
    let count = 0

    for (const child of node.children) {
        count++
        count += countTreeNodes(child)
    }

    return count
}

console.log(countTreeNodes(document.documentElement))