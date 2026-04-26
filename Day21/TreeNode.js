class TreeNode {
    constructor(name) {
        this.name = name;
        this.children = []
    }

    add(name) {
        const node = new TreeNode(name)
        this.children.push(node)
        return node
    }
}

const myTree = new TreeNode("media")
console.log(myTree.add("images").add("events"))
console.log(myTree.add("videos").add("v1.mp3"))

console.log(myTree)