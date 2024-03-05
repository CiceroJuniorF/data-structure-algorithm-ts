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
        });

        test("should remove element by index", ()=>{
            const linkedList = new LinkedList<number>();
            linkedList.push(1); // 0 
            linkedList.push(2); // 1
            linkedList.push(3); // 2
            expect(linkedList.removeAt(1).value).toBe(2);
            expect(linkedList.head.next.value).toBe(3);
            expect(linkedList.tail.value).toBe(3);
            expect(linkedList.removeAt(0).value).toBe(1);
            expect(linkedList.head.next).toBeUndefined();
            expect(linkedList.head).toBe(linkedList.tail)
        });

        test("should add element by index", ()=>{
            const linkedList = new LinkedList<number>();
            linkedList.push(1); // 0 
            linkedList.push(2); // 1
            linkedList.push(3); // 2
            linkedList.insert(1, 3);
            expect(linkedList.head.next.value).toBe(2);
            expect(linkedList.head.next.next.value).toBe(3);
            expect(linkedList.head.value).toBe(1);
            expect(linkedList.tail.value).toBe(1);
            linkedList.insert(100, 3);
            expect(linkedList.tail.value).toBe(1);
            expect(linkedList.head.value).toBe(1);
            expect(linkedList.head.next.value).toBe(2);
            expect(linkedList.head.next.next.value).toBe(3);
            expect(linkedList.head.next.next.next.value).toBe(100);
            expect(linkedList.head.next.next.next.next.value).toBe(1); // tail [1, 2, 3, 100, 1]
            expect(()=>{linkedList.insert(100, 1000)}).toThrow("Index out of range");

        });
    });


})