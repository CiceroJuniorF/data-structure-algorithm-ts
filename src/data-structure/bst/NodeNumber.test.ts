import NodeNumber from "./NodeNumber";
import { Compare } from "./constants/Compare";

describe("NodeNumber", () =>{

    test("should return the compare LESS_THAN_EQUAL when the key is LESS THAN node", ()=>{
        const node = new NodeNumber(1);
        expect(node.compare(0)).toEqual(Compare.LESS_THAN_EQUAL);
    });

    test("should return the compare GRREATER_THAN when the key is GRREATER_THAN node", ()=>{
        const node = new NodeNumber(1);
        expect(node.compare(5)).toEqual(Compare.GRREATER_THAN);
    });

    test("should return key in string", ()=>{
        const node = new NodeNumber(1);
        expect(node.toString()).toEqual("1");
    });

    test("should be add key in left", ()=>{
        const KEY = 1;
        const node = new NodeNumber(KEY);
        node.addLeft(KEY);
        expect(node.left?.key).toEqual(KEY);
    });

    test("should be add key in right", ()=>{
        const KEY = 1;
        const node = new NodeNumber(KEY);
        node.addRight(KEY);
        expect(node.right?.key).toEqual(KEY);
    });

});