export default class RecursiveSum {
    /**
     * fact(0) = 0
     * fact(1) = 1
     * fact(n) = n * fact(n-1)
     * @param num 
     * @returns number
     */
    run(num:number): number{
        if(num == 0 || num == 1) return num
        return num * this.run(num - 1);
    }

    /**
     * fact(0) = 0
     * fact(1, a) = a
     * fact(n, a) = fact(n - 1, n * a)
     * @param num 
     * @returns number
     */
    runWithTail(num: number, agg:number=1): number{
        if(num == 0) return 0
        if(num == 1) return agg
        return this.runWithTail(num - 1, num * agg)
    }
}