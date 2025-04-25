import Factorial from "./Factorial"

describe("Factorial", ()=>{

    test("should calc factorial with simple recursion", ()=>{
        const num = 5 
        const fact = new Factorial()
        expect(fact.run(num)).toEqual(120);
    })

    test("should calc factorial with recursion tail", ()=>{
        const num = 5 
        const fact = new Factorial()
        expect(fact.runWithTail(num)).toEqual(120);
    })

})