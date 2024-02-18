import Deque from "./Deque";

describe("Deque", () => {
    test("should be add item from front deque", () => {
        const deque: Deque<number> = new Deque<number>();
        const FRONT = 0;
        deque.addFront(FRONT);
        expect(deque.peekFront()).toEqual(FRONT);
    })

    test("should be add item from back deque", () => {
        const deque: Deque<number> = new Deque<number>();
        const FRONT = 0;
        const BACK = 2;
        deque.addFront(FRONT);
        deque.addBack(BACK);
        expect(deque.peekFront()).toEqual(FRONT);
        expect(deque.peekBack()).toEqual(BACK);
    });

    test("should be remove item from back deque", () => {
        const deque: Deque<number> = new Deque<number>();
        const FRONT = 0;
        const BACK = 2;
        deque.addFront(FRONT);
        deque.addBack(BACK);
        expect(deque.removeBack()).toEqual(BACK);
        expect(deque.peekBack()).toEqual(FRONT);
    });

    test("should be remove item from back deque", () => {
        const deque: Deque<number> = new Deque<number>();
        const FRONT = 0;
        const BACK = 2;
        deque.addFront(FRONT);
        deque.addBack(BACK);
        expect(deque.removeFront()).toEqual(FRONT);
        expect(deque.peekFront()).toEqual(BACK);
    });


    test("should be throw error 'Deque is empty' when removeFront empty deque", ()=>{
        const deque: Deque<number> = new Deque<number>();
        expect(()=>{deque.removeFront()}).toThrowError("Deque is empty");
    });

    test("should be throw error 'Deque is empty' when removeBack empty deque", ()=>{
        const deque: Deque<number> = new Deque<number>();
        expect(()=>{deque.removeBack()}).toThrowError("Deque is empty");
    })


})