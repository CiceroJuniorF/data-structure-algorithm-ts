import AllPairsOfBoxes from "./AllPairsOfBoxes";

describe("AllPairsOfBoxes", ()=>{
    test("should return the number of pairs of boxes", ()=> {
        const allPairsOfBoxes = new AllPairsOfBoxes();
        expect(allPairsOfBoxes.exec([1, 2, 3, 4, 5])).toBe(25);
        expect(allPairsOfBoxes.exec([1, 2, 3, 4, 5, 6])).toBe(36);
        expect(allPairsOfBoxes.exec([1, 2, 3, 4, 5, 6, 7])).toBe(49);
        expect(allPairsOfBoxes.exec([1, 2, 3, 4, 5, 6, 7, 8])).toBe(64);
        expect(allPairsOfBoxes.exec([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(81);
    })
})