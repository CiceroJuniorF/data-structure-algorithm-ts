import { randomInt } from "crypto";
import HotPotato from "./HotPotato";

describe("HotPotato", ()=>{
    test("should be the winner the XX5 player", ()=>{
        const PLAYERS = ["XX1", "XX2", "XX3", "XX4", "XX5", "XX6"];
        const SALT = 1;
        const hotPotato = new HotPotato(PLAYERS, SALT);
        const result = hotPotato.start();
        expect(result.winner).toEqual("XX5");
        expect(result.eliminated.length).toEqual(PLAYERS.length - 1);
    });

    test("should be the winner anyon at the load test", ()=>{
        const PLAYERS = [];
        for (let index = 0; index < 100; index++) {
            const player = `XX${index}`
            PLAYERS.push(player);
        }
        const SALT = randomInt(10);
        const hotPotato = new HotPotato(PLAYERS, SALT);
        const result = hotPotato.start();
        expect(result.eliminated.length).toEqual(PLAYERS.length - 1);
        expect(result.winner).not.toBeNull();
    });
})