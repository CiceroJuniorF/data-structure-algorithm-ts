import Queue from "./Queue"

describe("Queue", ()=>{

    test("should be enqueue element in the queue", ()=>{
        const queue = new Queue<number>();
        queue.enqueue(1);
        expect(queue.size()).toEqual(1);
    })

    test("should be dequeue element in the queue", ()=>{
        const queue = new Queue<number>();
        queue.enqueue(2);
        expect(queue.dequeue()).toEqual(2);
        expect(queue.isEmpty()).toBeTruthy();
    })

    test("should be throw error 'Queue is empty' when dequeue empty queue", ()=>{
        const queue = new Queue<number>();
        expect(()=>{queue.dequeue()}).toThrowError("Queue is empty");
    })

    test("should be dequeue element in the queue", ()=>{
        const queue = new Queue<number>();
        queue.enqueue(2);
        const element = queue.dequeue();
        expect(queue.size()).toEqual(0);
        expect(element).toEqual(2);
    })

    test("should be return the first intem in the queue", ()=> {
        const queue = new Queue<number>();
        queue.enqueue(1223);
        expect(queue.peek()).toEqual(1223);
    });

    test("should be return undefined when the queue is empty", ()=> {
        const queue = new Queue<number>();
        expect(queue.peek()).toBeUndefined();
    });

    test("should be return true when the queue is empty", ()=> {
        const queue = new Queue<number>();;
        expect(queue.isEmpty()).toBeTruthy();
    });

})