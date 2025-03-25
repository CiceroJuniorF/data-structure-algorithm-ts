import NodeDoubly from "./NodeDoubly";

const defaultEquals = (a,b) => {
    return a == b;
}

export default class DoublyLinkedList<T> {
    public head: NodeDoubly<T>;
    public count = 0;
    public tail: NodeDoubly<T>;
    constructor(private equals:Function = defaultEquals){}

    public push(element: T): void{
        const node = new NodeDoubly<T>(element);
        if(!this.head){
            this.head = node
            this.tail = this.head;
            node.previous = null;
            return
        }else {
            node.previous = this.tail;
            this.tail.next = node;
            this.tail = this.tail.next;
        }
        this.count++;
    }

    public removeAt(index:number): NodeDoubly<T> {
        if(index < 0 || index > this.count) return;
        let current: NodeDoubly<T> = this.getElementAt(index);
        if(index == 0){
            this.head = current.next;
            this.head.previous = null;
        }else{
            current.previous.next = current.next;
            if(!current.next)
                this.tail = current.next;
        }
        this.count --;
        return current
    }

    public getElementAt(index){
        if(index < 0 || index > this.count) return;
        if(index == 0) return this.head;
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }

    public insert(element: T, index: number): void {
        if(index > (this.count+1)) throw Error("Index out of range")
        const node = new NodeDoubly<T>(element);
        if(index > this.count) {
            this.tail.next = node;
            node.previous = this.tail
            this.tail = node;
        }else if(index == 0){
            this.head.next = this.head;
            this.head = node;
        }else{
            let current = this.getElementAt(index);
            node.next = current;
            current.previous.next = node;
        }
        this.count++;
    }

}