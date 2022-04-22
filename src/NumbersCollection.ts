import { Sortable } from "./interfaces/Sortable";
import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter{

    collection: number[] = [];

    constructor(collection: number[]){
        super();
        this.collection = collection;
    }

    get length(): number {
        return this.collection.length;
    }

    swap(leftIndex: number, rightIndex: number): void {
        let swap = this.collection[leftIndex];
        this.collection[leftIndex] = this.collection[rightIndex];
        this.collection[rightIndex] = swap;

    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.collection[leftIndex] > this.collection[rightIndex];
    }

}