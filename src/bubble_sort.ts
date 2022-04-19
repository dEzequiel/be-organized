export class Sorter {

    private collection: number[];

    constructor(collection: number[]) {
        this.collection = collection;
    }

    bubble_sort() {

        const { length } = this.collection;
        let swap: number;

        for(let i = 0; i < length; i++) {
            if(this.collection[i] > this.collection[i + 1]){
                swap = this.collection[i + 1]
                this.collection[i + 1] = this.collection[i]
                this.collection[i] = swap;
            }
        }

        return this.collection;
    }

}