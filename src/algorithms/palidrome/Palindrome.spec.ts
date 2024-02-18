import Palindrome from "./Palindrome";

describe("Palindrome", ()=>{

    test("shold be palindrome", ()=>{
        const word = "OVO"
        const palindrome = new Palindrome(word);
        expect(palindrome.check()).toBeTruthy();
    });
    
    test("sholdn't be palindrome", ()=>{
        const word = "OVOI"
        const palindrome = new Palindrome(word);
        expect(palindrome.check()).toBeFalsy();
    });
    
});