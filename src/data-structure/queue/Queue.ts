export default class Queue<T> {
    private _items:T[]
    constructor(){
        this._items = [];
    }
    
    /**
     * enqueue item
     * @param item 
     */
    public enqueue(item:T):void{
        this._items.push(item);
    }

    /**
     * get queue size
     */
    public size(): number {
        return this._items.length;
    }

    /**
     * dequeu item
     * @returns T
     */
    public dequeue():T {
        if(this.isEmpty()) throw  new Error("Queue is empty");
        return this._items.shift();
    }

    /**
     * ge the first item in queueu 
     * @returns T
     */
    public peek():T {
        if(this.isEmpty()) return;
        return this._items[0];
    }

    /**
     * check if the queue is empty
     * @returns boolean
     */
    public isEmpty(): boolean {
        return !this._items.length
    }


}