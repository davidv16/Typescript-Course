import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';
import { CharactersCollection } from './CharactersCollection';

//a collection of numbers are passed to the NumbersCollection class
const numbersCollection = new NumbersCollection([50, 3, -5, 0]);
//then passed to the Sorter Class
const sorter = new Sorter(numbersCollection);
//then Sorted in that class
sorter.sort();
//and returned to console log
console.log(sorter.collection);

//a collection of numbers are passed to the CharactersCollection class
const charactersCollection = new CharactersCollection('Xaaygb');
//then passed to the Sorter Class
const Csorter = new Sorter(charactersCollection);
//then Sorted in that class
Csorter.sort();
//and returned to console log
console.log(charactersCollection.data);
