class BSTNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {

        if (value === this.value) return null
        if (value < this.value) {

            if (this.left === null) {
                this.left = new BSTNode(value)
            } else {
                this.left.insert(value)
            }

        } else {

            if (this.right === null) {
                this.right = new BSTNode(value)
            } else {
                this.right.insert(value)
            }
        }
    }

    search(value) {

        if (value === this.value) {
            return true
        }

        if (value < this.value && this.left !== null) {
            return this.left.search(value)
        }

        if (value > this.value && this.right !== null) {
            return this.right.search(value)
        }

        return false
    }
}


const BST = new BSTNode(50)
BST.insert(10)
BST.insert(30)
BST.insert(60)
console.log(BST)
console.log(BST.search(60))
