import {App}  from "./app"

describe("App", () => {
    it("bootstrap", async () => {  
        expect(App.bootstrap()).toBe("stuff");
    });
});