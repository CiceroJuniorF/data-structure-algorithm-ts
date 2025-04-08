import Node from "./Node";

const defaultEquals = (a, b) => {
    return a == b;
}

export default class LinkedList<T> {
    public head: Node<T>;
    public count = 0;
    public tail: Node<T>;
    constructor(private equals: Function = defaultEquals) { }

    public push(element: T): void {
        const node = new Node<T>(element);
        if (!this.head) {
            this.head = node
            this.tail = this.head;
            return
        } else {
            // add to next tail a node
            this.tail.next = node;
            // set to tail new node
            this.tail = this.tail.next;
        }
        this.count++;
    }

    public removeAt(index: number): Node<T> {
        if (index < 0 || index > this.count) return;
        let current: Node<T> = this.getElementAt(index);
        if (index == 0) {
            this.head = current.next;
        } else {

            let previous: Node<T> = this.getElementAt(index - 1);
            // linked to next [1,2,3] -> [1,3]
            previous.next = current.next;
            // tail
            if (!current.next)
                this.tail = previous;
        }
        this.count--;
        return current
    }

    public getElementAt(index) {
        if (index < 0 || index > this.count) return;
        if (index == 0) return this.head;
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }

    public insert(element: T, index: number): void {
        if (index > (this.count + 1)) throw Error("Index out of range")
        const node = new Node<T>(element);
        if (index > this.count) {
            this.tail.next = node;
            this.tail = node;
        } else if (index == 0) {
            this.head.next = this.head;
            this.head = node;
        } else {
            let previous = this.getElementAt(index - 1);
            let current = previous.next;
            node.next = current;
            previous.next = node;
        }
        this.count++;

    }

    /** 
     * !Explain 1, 2, 3, 4
     * 
     * *First Loop
     * List = 1 -> 2 -> 3 -> 4
     * First = 1
     * Second = 2
     * 
     * *Second Loop
     * 1 <-> 2 3->4
     * First 2
     * Second 3
     * 
     * *Third Loop
     * 1 <-> 2 <- 3 -> 4
     * First 4
     * Second Null
     * 
     * *End Loop:
     * 1 <-> 2 <- 3 <- 4
     * 
     * *Clean head next
     * 1 <- 2 <- 3 <- 4
     * 
     * *Set first how head
     * 4 -> 3 -> 2 -> 1

    */
    reverse(): void {
        let first = this.head;
        let second = this.head.next;
        while (second) {
            const temp = second.next;
            second.next = first
            first = second
            second = temp
        }
        this.head.next = null // Clean pointer old head
        this.head = first;
    }

}