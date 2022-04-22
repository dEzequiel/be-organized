import { Sortable } from "./interfaces/Sortable";
import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter {

    collection: string = '';

    constructor(collection: string) {
        super();
        this.collection = collection;
    }

    get length(): number {
        return this.collection.length;
    }

    swap(leftIndex: number, rightIndex: number): void {
        const characters = this.collection.split('');
        let swap = characters[leftIndex];

        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = swap;

        this.collection = characters.join('');

    }
    compare(leftIndex: number, rightIndex: number): boolean {
        return this.collection[leftIndex] > this.collection[rightIndex];
    }


}