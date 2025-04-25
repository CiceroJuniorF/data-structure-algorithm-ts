export default class RecursiveSum {
    /**
     * sum([]) = 0
     * sum([1]) = 1
     * @param arr 
     * @returns number
     */
    sum(arr:number[]): number{
        if(!arr.length) return 0
        if(arr.length == 1) return arr[0]
        return arr[0] + this.sum(arr.slice(1, arr.length))
    }

    /**
     * sum([], agg) = agg
     * sum([], 1+agg)
     * @param arr 
     * @returns number
     */
    sumWithTail(arr:number[], agg:number=0): number{
        if(!arr.length) return agg
        return this.sumWithTail(arr.slice(1, arr.length), arr[0] +  agg)
    }
}