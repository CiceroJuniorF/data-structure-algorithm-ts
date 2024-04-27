import GetFirstItem from "./GetFirstItem";

describe("GetFirstItem", ()=> {
    test("should return the first item of the array", ()=> {
        const getFirstItem = new GetFirstItem();
        expect(getFirstItem.exec(["Nemo"])).toBe("Nemo");
        expect(getFirstItem.exec(["Dory", "Nemo"])).toBe("Dory");
        expect(getFirstItem.exec(["Dory", "Marlin", "Nemo"])).toBe("Dory");
        expect(getFirstItem.exec(["Dory", "Marlin", "Nemo", "Gill"])).toBe("Dory");
        expect(getFirstItem.exec(["Dory", "Marlin", "Gill", "Nemo"])).toBe("Dory");
    })
})