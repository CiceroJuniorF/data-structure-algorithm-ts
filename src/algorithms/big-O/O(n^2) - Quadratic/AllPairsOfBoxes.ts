export default class AllPairsOfBoxes {

    /**
     * 
     * @param boxes 
     * @returns number of pairs of boxes
     */
    public exec(boxes: any[]): number {
        let total = 0
        for (let i = 0; i < boxes.length; i++) {
            for (let j = 0; j < boxes.length; j++) {
                total++
            }
        }
        return total;
    }
}