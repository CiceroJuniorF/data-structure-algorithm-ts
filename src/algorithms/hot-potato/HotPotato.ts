import Queue from "../../data-structure/queue/Queue";

export default class HotPotato {
    private _players: Queue<string>;
    private readonly _salt: number;

    constructor(players: string[], salt: number = 1) {
        this._players = new Queue();
        players.forEach(player => this._players.enqueue(player));
        this._salt = salt;
    }
    /**
     * start game hot potato
     * @returns {"eliminated": string [], "winner": string}
     */
    public start(): {eliminated: string [], winner: string} {
        const eliminated: string[] = [];
        while(this._players.size() > 1){
            for (let i = 0; i < this._salt; i++) {
                this._players.enqueue(this._players.dequeue());
            }
            eliminated.push(this._players.dequeue());
        }
        return { eliminated: eliminated, winner: this._players.dequeue() };
    }


}