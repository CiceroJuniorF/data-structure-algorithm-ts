export default class Node<T> {
    public readonly value:T;
    public next:Node<T>;
    constructor(element: T){
        this.value = element;
    }
}