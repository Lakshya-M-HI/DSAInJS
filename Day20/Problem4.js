function print_leaf_Nodes(node, depth = 0) {

    console.log(' '.repeat(depth), node.localName)

    for (const child of node.children) {
        print_leaf_Nodes(child, depth + 1)
    }
}
print_leaf_Nodes(document.documentElement)