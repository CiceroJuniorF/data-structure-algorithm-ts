import RecursiveSum from "./RecursiveSum"

describe("RecursiveSum", ()=>{

    test("should sum items in array with simple recursion", ()=>{
        const arr = [1,2,3,4]
        const recSum = new RecursiveSum()
        expect(recSum.sum(arr)).toEqual(10);
    })

    test("should sum items in array with recursion tail", ()=>{
        const arr = [1,2,3,4]
        const recSum = new RecursiveSum()
        expect(recSum.sumWithTail(arr)).toEqual(10);
    })

})