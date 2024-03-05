import Node from "./Node";

const defaultEquals = (a,b) => {
    return a == b;
}

export default class LinkedList<T> {
    public head: Node<T>;
    public count = 0;
    public tail: Node<T>;
    constructor(private equals:Function = defaultEquals){}

    public push(element: T): void{
        const node = new Node<T>(element);
        if(!this.head){
            this.head = node
            this.tail = this.head;
            return
        }else {
            // add to next tail a node
            this.tail.next = node;
            // set to tail new node
            this.tail = this.tail.next;
        }
        this.count++;
    }



}