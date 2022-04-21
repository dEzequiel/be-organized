import { Sortable } from "./interfaces/Sortable";

export class NumbersCollection implements Sortable{

    collection: number[] = [];

    constructor(collection: number[]){
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