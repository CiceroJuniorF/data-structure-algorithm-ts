import Deque from "../../data-structure/deque/Deque";

export default class Palindrome {
    private _wordDeque:Deque<string>;
    constructor(word:string){
        this._wordDeque = new Deque<string>();
        word?.toLocaleLowerCase().split(' ').join('').split('').forEach(letter => {
            this._wordDeque.addBack(letter);
        });
    }

    /**
     * run check word palindrome
     * @returns boolean
     * */
    public check(): boolean {
        let isEqual = true;
        while (this._wordDeque.size() > 1 && isEqual) {
            if(this._wordDeque.removeBack() != this._wordDeque.removeFront())
                isEqual = false;
        }
        return isEqual;
    }
}