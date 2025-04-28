export default class BinarySearch {

    public search(array:number[], element: number): number {
        if(!array || !array.length ) return
        if(element == array[0]) return 0
        const pointer = Math.floor(array.length / 2);
        const pV = array[pointer]
        if(element == pV) return pV
        if(element > pV) array = array.slice(pointer, array.length)
        else array = array.slice(0, pointer)
        return this.search(array, element)
    }

}


