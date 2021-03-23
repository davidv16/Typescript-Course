import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

//a collection of numbers are passed to the NumbersCollection class
//sorted and written out
const numbersCollection = new NumbersCollection([50, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

//a collection of numbers are passed to the CharactersCollection class
//sorted and written out
const charactersCollection = new CharactersCollection('Xaaygb');
charactersCollection.sort();
console.log(charactersCollection.data);

//create a new linked list
//and add a few numbers to it.
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

//sort the list and print
linkedList.sort();
linkedList.print();
