export default class FindNemo {
    
    /**
     * find Nemo
     * @param array
     * @returns string
     * */
    public exec(array:string[]): string {
        let position = -1;
        array.forEach((item, index) => {
            if (item.toLocaleUpperCase() === "NEMO") {
                position = index + 1;
            }
        });

        return `I found Nemo at ${position}`;
    }
}