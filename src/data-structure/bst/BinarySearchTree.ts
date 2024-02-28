import Node from "./Node";
import { Compare } from "./constants/Compare";

export default class BinarySearchTree<T>{
    public readonly root:Node<T>;

    constructor(root:Node<T>){
        this.root = root;
    }


    public insert(key:T, node?:Node<T>, ):void {
        if(!node){
            node = this.root;
        }
        if(node.compare(key) == Compare.LESS_THAN_EQUAL){
            if(!!node.left) this.insert(key, node.left);
            else node.addLeft(key);
        } else {
            if(!!node.right) this.insert(key, node.right);
            else node.addRight(key);
        }
    }
}