function count_specificTags(node, target) {
    let count = 0

    if (node.tagName === target) count = 1

    for (const child of node.children) {
        count += count_specificTags(child, target, count)
    }

    return count
}

console.log(count_specificTags(document.body, "DIV"))