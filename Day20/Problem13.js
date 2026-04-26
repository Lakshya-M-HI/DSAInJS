function print_leaf_Nodes(node, max = 0, depth = 0) {

    if (max < depth && !node.children.length) max = depth
    console.log(node.localName)

    for (const child of node.children) {
        max = print_leaf_Nodes(child, max, depth + 1)
    }

    return max
}

console.log(print_leaf_Nodes(document.body))