export default class Queue<T> {
    private items:T[]
    constructor(){
        this.items = [];
    }
    
    /**
     * enqueue item
     * @param item 
     */
    public enqueue(item:T):void{
        this.items.push(item);
    }

    /**
     * get queue size
     */
    public size(): number {
        return this.items.length;
    }

    /**
     * dequeu item
     * @returns T
     */
    public dequeue():T {
        if(this.isEmpty()) throw  new Error("Queue is empty");
        return this.items.shift();
    }

    /**
     * ge the first item in queueu 
     * @returns T
     */
    public peek():T {
        if(this.isEmpty()) return;
        return this.items[0];
    }

    /**
     * check if the queue is empty
     * @returns boolean
     */
    public isEmpty(): boolean {
        return !this.items.length
    }


}