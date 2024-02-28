import Node from "./Node";
import { Compare } from "./constants/Compare";

export default class NodeNumber extends Node<number> {
    
    public compare(key: number): Compare {
        if(this.key >= key) return Compare.LESS_THAN_EQUAL; 
        if(this.key < key) return Compare.GRREATER_THAN; 
    }

    protected create(key: number): Node<number> {
        return new NodeNumber(key);
    }

    public toString(): string {
        return this.key.toString();
    }

    public static create(key: number){
        return new NodeNumber(key);
    }

}