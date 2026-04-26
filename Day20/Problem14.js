function print_leaf_Nodes(node, target) {

    if (node.id === target) return true
    console.log(node)

    for (const child of node.children) {
        if (print_leaf_Nodes(child, target) === true) return true
    }

    return false
}

console.log(print_leaf_Nodes(document.body, "app"))