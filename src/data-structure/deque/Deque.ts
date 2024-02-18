export default class Deque<T> {
    private _items: T[];
    constructor() {
        this._items = [];
    }
    /**
     * add item in front of deque
     * @param item 
     */
    public addFront(item:T):void {
        this._items.unshift(item);
    }

    /**
     * add item in back of deque
     * @param item 
     */
    public addBack(item:T):void {
        this._items.push(item);
    }

    /**
     * remove item in back of deque
     * @returns T
    */
    public removeBack():T {
        if(this.isEmpty()) throw new Error("Deque is empty")
        return this._items.pop();
    }

    /**
     * remove item in front of deque
     * @returns T
    */
    public removeFront():T {
        if(this.isEmpty()) throw new Error("Deque is empty")
        return this._items.shift();
    }

    /**
     * ge the first item in queueu 
     * @returns T
     */
    public peekFront(): T {
        if (this.isEmpty()) return;
        return this._items[0];
    }

     /**
     * ge the first item in queueu 
     * @returns T
     */
     public peekBack(): T {
        if (this.isEmpty()) return;
        return this._items[this._items.length-1];
    }

    /**
     * check if the queue is empty
     * @returns boolean
     */
    public isEmpty(): boolean {
        return !this.size()
    }

      /**
     * return size deque
     * @returns boolean
     */
      public size(): number {
        return this._items.length
    }
}