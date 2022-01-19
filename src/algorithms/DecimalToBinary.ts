import Stack from "../data-structure/stack/Stack";

export abstract class DecimalToBinary{
    public static run (decimal:number): string{
        const _remStack: Stack<number> = this.convertDecimalToRemainderStack(decimal);
        const binaryString = this.convertRemainderStackToBinary(_remStack); 
        return binaryString;
    }

    private static convertDecimalToRemainderStack(decimal: number): Stack<number>{
        const _remStack: Stack<number> = new Stack<number>();
        while(decimal > 0){
            const _rem = Math.floor(decimal % 2);
             _remStack.push(_rem);
             decimal = Math.floor(decimal / 2);
        }
        return _remStack;
    }

    private static convertRemainderStackToBinary(remStack:Stack<number>): string {
        let binaryItems = [];
        while(!remStack.isEmpty())
            binaryItems = [...binaryItems, remStack.pop().toString()];
        return binaryItems.join("");
    }
}