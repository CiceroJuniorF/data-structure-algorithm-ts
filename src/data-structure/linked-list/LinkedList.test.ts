import LinkedList from "./LinkedList";

describe("LinkedList", ()=>{
    describe("LinkedListNumber", ()=>{
        test("should create a linked list with numbers", ()=>{
            const linkedList = new LinkedList<number>();
            linkedList.push(1);
            linkedList.push(2);
            linkedList.push(3);
            expect(linkedList.head.value).toBe(1);
            expect(linkedList.head.next.value).toBe(2);
            expect(linkedList.head.next.next.value).toBe(3);
            expect(linkedList.head.value).toBe(1);
            expect(linkedList.tail.value).toBe(3);
        })
    })
})