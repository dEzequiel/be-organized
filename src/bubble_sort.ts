export class Sorter {

    private collection: number[] = [];

    constructor(){};

    bubble_sort(collection: number[]) {

        const { length } = collection;
        let swap: number;

        for(let i = 0; i < length; i++) {
            for (let j = 0; j < length; j++) {
                if(collection[j] > collection[j + 1]) {
                    swap = collection[j];
                    collection[j] = collection[j + 1]
                    collection[j + 1] = swap;
                }
            }
        }

        return collection;
    }

}

const x = new Sorter();
console.log(x.bubble_sort([3, 2, 1]));