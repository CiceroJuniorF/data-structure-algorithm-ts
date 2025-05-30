import BinarySearch from "./BinarySearch"

describe("BinarySearch", ()=>{
    test("should return index of element at sorted array", ()=>{
        const binarySearch = new BinarySearch();
        const sortedArray = [1,2,3,4,5,6,7,8,9,10];
        const index = 8
        expect(binarySearch.search(sortedArray, sortedArray[index])).toBe(sortedArray[index])
    })


    test("should return index of element at big sorted array", ()=>{
        const binarySearch = new BinarySearch();
        const sortedArray = Array.from({ length: 1000 }, (_, i) => i);
        const index = 999
        expect(binarySearch.search(sortedArray, sortedArray[index])).toBe(sortedArray[index])
    })

   
})
