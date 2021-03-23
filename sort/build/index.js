"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
//a collection of numbers are passed to the NumbersCollection class
//sorted and written out
var numbersCollection = new NumbersCollection_1.NumbersCollection([50, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);
//a collection of numbers are passed to the CharactersCollection class
//sorted and written out
var charactersCollection = new CharactersCollection_1.CharactersCollection('Xaaygb');
charactersCollection.sort();
console.log(charactersCollection.data);
//create a new linked list
//and add a few numbers to it.
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
//sort the list and print
linkedList.sort();
linkedList.print();
