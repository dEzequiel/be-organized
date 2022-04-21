import { Sorter } from "./src/Sorter";
import { NumbersCollection } from "./src/NumbersCollection";
import { CharactersCollection } from "./src/CharactersCollection";

const numbersCollection = new NumbersCollection([5, 4, 3, 2, 1]);
const charactersCollection = new CharactersCollection('iduahfjnladfilhAHHASFDJLSHDL');
const sorter = new Sorter(numbersCollection);
const sorterString = new Sorter(charactersCollection);

sorter.sort();
sorterString.sort()
console.log(numbersCollection.collection);
console.log(charactersCollection.collection);
