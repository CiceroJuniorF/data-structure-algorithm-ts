import HotPotato from "./HotPotato";

describe("HotPotato", ()=>{
    test("should be the winner the XX5 player", ()=>{
        const PLAYERS = ["XX1", "XX2", "XX3", "XX4", "XX5", "XX6"];
        const SALT = 1;
        const hotPotato = new HotPotato(PLAYERS, SALT);
        const result = hotPotato.start();
        expect(result.winner).toEqual("XX5");
    });
})