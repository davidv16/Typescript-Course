import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

//a collection of numbers are passed to the NumbersCollection class
const numbersCollection = new NumbersCollection([50, 3, -5, 0]);
numbersCollection.sort();
//then passed to the Sorter Class
//const sorter = new Sorter(numbersCollection);
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

//create a new linked list
const linkedList = new LinkedList();
//add 500 to the list
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

//run the linkedList into the sorter class
const Lsorter = new Sorter(linkedList);
//sort the list
Lsorter.sort();
//print the list
linkedList.print();
