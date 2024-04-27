import FindNemo from "./FindNemo";

describe("FindNemo", ()=> {
    test("should find Nemo and return the position", ()=> {
        const findNemo = new FindNemo();
        expect(findNemo.exec(["Nemo"])).toBe("I found Nemo at 1");
        expect(findNemo.exec(["Dory", "Nemo"])).toBe("I found Nemo at 2");
        expect(findNemo.exec(["Dory", "Marlin", "Nemo"])).toBe("I found Nemo at 3");
        expect(findNemo.exec(["Dory", "Marlin", "Nemo", "Gill"])).toBe("I found Nemo at 3");
        expect(findNemo.exec(["Dory", "Marlin", "Gill", "Nemo"])).toBe("I found Nemo at 4");
    })
})