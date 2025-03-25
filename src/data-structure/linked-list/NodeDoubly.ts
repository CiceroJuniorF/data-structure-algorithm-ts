import Node from "./Node";

export default class NodeDoubly<T> {
    public previous: NodeDoubly<T>;   
    public readonly value:T;
    public next:NodeDoubly<T>;
    constructor(element: T){
        this.value = element;
    }
}