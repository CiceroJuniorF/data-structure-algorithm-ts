import Node from "./Node";
import { Compare } from "./constants/Compare";
import { Traverse } from "./constants/Traverse";

export default class BinarySearchTree<T>{

    public readonly root: Node<T>;

    constructor(root: Node<T>) {
        this.root = root;
    }

    public insert(key: T, node?: Node<T>,): void {
        if (!node) {
            node = this.root;
        }
        if (node.compare(key) == Compare.LESS_THAN_EQUAL) {
            if (!!node.left) this.insert(key, node.left);
            else node.addLeft(key);
        } else {
            if (!!node.right) this.insert(key, node.right);
            else node.addRight(key);
        }
    }

    public traverse(type: Traverse): T[] {
        switch (type) {
            case Traverse.IN_ORDER:
                return this.inOrder(this.root);
            case Traverse.PRE_ORDER:
                return this.preOrder(this.root);
            case Traverse.POST_ORDER:
                return this.postOrder(this.root);
        }
    }

    private inOrder(node: Node<T>, values: T[] = []): T[] {
        if (node != null) {
            this.inOrder(node.left, values);
            values.push(node.key);
            this.inOrder(node.right, values);
        }
        return values;
    }

    private preOrder(node: Node<T>, values: T[] = []): T[] {
        if (node != null) {
            values.push(node.key);
            this.preOrder(node.left, values);
            this.preOrder(node.right, values);
        }
        return values;
    }

    public postOrder(node: Node<T>, values: T[] = []): T[] {
        if (node != null) {
            this.postOrder(node.left, values);
            this.postOrder(node.right, values);
            values.push(node.key);
        }
        return values;
    }

    public height(): number {
        return this.heightNode(this.root);
    }

    private heightNode(root: Node<T>): number {
        if (root == null) return 0;
        const lHeight = this.heightNode(root.left);
        const rHeight = this.heightNode(root.right);
        if (lHeight > rHeight) return (lHeight + 1);
        return (rHeight + 1);
    }

}