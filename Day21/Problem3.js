class BSTNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {

        if (value === this.value) return null

        if (value < this.value) {
            if (!this.left) this.left = new BSTNode(value)
            else this.left.insert(value)

        } else {
            if (!this.right) this.right = new BSTNode(value)
            else this.right.insert(value)
        }
    }

    delete(value) {
        return this._deleteNode(this, value)
    }

    _deleteNode(root, value) {
        if (!root) return null

        if (value < root.value) {
            root.left = this._deleteNode(root.left, value)
        } else if (value > root.value) {
            root.right = this._deleteNode(root.right, value)
        } else {

            // Case 1: no child
            if (!root.left && !root.right) return null

            // Case 2: one child
            if (!root.left) return root.right
            if (!root.right) return root.left

            // Case 3: two children
            let successor = this._minValue(root.right)
            root.value = successor
            root.right = this._deleteNode(root.right, successor)
        }

        return root
    }

    _minValue(node) {
        while (node.left !== null) {
            node = node.left
        }
        return node.value
    }
}


const BST = new BSTNode(50)
BST.insert(10)
BST.insert(30)
BST.insert(60)
console.log(BST.delete(50))
console.log(BST)
