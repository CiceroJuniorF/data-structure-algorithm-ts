export default class Stack<T> {
    private _items: T[];

    constructor(){
        this._items = []
    }

    public push(item:T): void{
        this._items.push(item);
    }

    public size(): number{
        return this._items.length;
    }

    public isEmpty(): boolean{
        return this.size() == 0;
    }

    public clear(): void{
         this._items = [];
    }

    public peek(): T{
        if(this.isEmpty()) throw "Stack is Empty";
        return this._items.slice(-1)[0];
   }

   public pop(): T{
    if(this.isEmpty()) throw "Stack is Empty";
    return this._items.pop();
}

    

}