import Stack from "../data-structure/stack/Stack";

export abstract class DecimalToBinary{
    public static run (decimal:number): string{
        const _resStack: Stack<number> = new Stack<number>();
        let binaryString = "";
        while(decimal > 0){
            const _res = Math.floor(decimal % 2);
             _resStack.push(_res);
             decimal = Math.floor(decimal / 2);
        }
        while(!_resStack.isEmpty())
            binaryString += _resStack.pop().toString();
        return binaryString;
    }
}