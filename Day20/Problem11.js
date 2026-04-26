function print_leaf_Nodes(node) {

    if (!node.children.length) console.log(node.localName)

    for (const child of node.children) {
        print_leaf_Nodes(child)
    }
}

console.log(print_leaf_Nodes(document.body))