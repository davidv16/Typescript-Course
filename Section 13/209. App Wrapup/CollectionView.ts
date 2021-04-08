import { Collection } from '../models/Collection';

//abstract class for displaying a collection of all the users
//takes in two generics, T and K
//T being a of model in our case User
//K being the user props
export abstract class CollectionView<T, K> {
  //class takes in an html element of the parent div
  //and a collection of users
  constructor(public parent: Element, public collection: Collection<T, K>) {}

  //an abstract renderItem function to be implemented in UserList
  //or whichever class that wants to implement a list of this
  //takes in a generic of T which is going to be user
  //takes in itemParent to be passed down to userShow as html element
  abstract renderItem(model: T, itemParent: Element): void;

  //render function to render the collection of users
  render(): void {
    //zeroes out the html before rendering
    this.parent.innerHTML = '';

    //creates an element called template
    const templateElement = document.createElement('template');

    //runs through the collection of users
    for (let model of this.collection.models) {
      //creates a new div for each user to contain it
      const itemParent = document.createElement('div');
      //calls the render function and passes a single user and the parent div for him
      this.renderItem(model, itemParent);
      //appends the itemParent div to the templateElement
      templateElement.content.append(itemParent);
    }
    //and appends the content of the templateElement to DOM
    this.parent.append(templateElement.content);
  }
}
