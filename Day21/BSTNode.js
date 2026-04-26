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
}


const BST = new BSTNode(50)
BST.insert(20)
BST.insert(10)
console.log(BST)