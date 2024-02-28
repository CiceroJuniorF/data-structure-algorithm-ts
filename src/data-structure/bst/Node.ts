import { Compare } from "./constants/Compare";

export default abstract class Node<T> {
    private _key: T;
    private _left: Node<T>;
    private _right: Node<T>;

    constructor(key: T){
        this._key = key;
    }
    
    public get key() : T {
        return  this._key;
    }

    public get left() : Node<T> {
        return this._left;
    }

    public get right() : Node<T> {
        return this._right;
    }
    
    public abstract compare(key: T): Compare;

    protected abstract create(key:T): Node<T>;

    public abstract toString():string;

    public addLeft(key:T):void{
        this._left = this.create(key);
    }

    public addRight(key:T):void{
        this._right = this.create(key);
    }
}