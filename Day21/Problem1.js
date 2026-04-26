

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

    search(name) {

        if (name === this.name) {
            return true
        }

        for (const element of this.children) {
            if (element.search(name) === true) {
                return true
            }
        }

        return false
    }
}

const myTree = new TreeNode("media")
myTree.add("images").add("events")
myTree.add("videos").add("v1.mp3")

console.log(myTree.search("videos"))