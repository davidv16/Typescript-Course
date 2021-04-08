import { Model } from '../models/Model';

//T is going to have all the same properties as
//model, with type k loaded into it
//and the definition of k is coming from the second
//generic type being passed in
export abstract class View<T extends Model<K>, K> {
  //holds the div regions being used
  //takes in some string of type html element
  regions: { [key: string]: Element } = {};

  //class takes in a parent element and a model of generic type T(which is user in our case)
  constructor(public parent: Element, public model: T) {
    //when an instance of View is created
    //run the bindModel function
    this.bindModel();
  }

  //template for html template to be implemented
  //by each class that wants to have a an html div
  abstract template(): string;

  //a function that stores the names of css classes for the divs each class wants to print
  //takes in some strings
  //and return css classes
  //later implemented by the one who inherets the class(for example the UserEdit class)
  regionsMap(): { [key: string]: string } {
    return {};
  }

  //a function that stores the possible events of a page/region/part
  //takes in some strings
  //and returns names of events
  //later implemented by the UserForm class
  eventsMap(): { [key: string]: () => void } {
    return {};
  }

  //function to detect changes in user
  //runs model.on change function to re-render if change occurs
  bindModel(): void {
    this.model.on('change', () => {
      this.render();
    });
  }

  //a function to bind events to right places in the page
  //takes in a fragment from the document
  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    //runs through the eventsMap
    for (let eventKey in eventsMap) {
      //splits the string 'click:button' into click and button
      const [eventName, selector] = eventKey.split(':');

      //on a specific fragment of the page
      //selects the selector "button" and for each item in the event map
      fragment.querySelectorAll(selector).forEach((element) => {
        //add an event listener with the type of click and and instance of eventsMap array
        //to element
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  //function to map regions to divs in the page
  //takes in a fragment from the document
  mapRegions(fragment: DocumentFragment): void {
    //gets the available regions
    const regionsMap = this.regionsMap();

    //runs through the regions
    for (let key in regionsMap) {
      //sets a specific region by key to a variable
      const selector = regionsMap[key];
      //and at the same time finds the place in the document and sets it to a variable
      const element = fragment.querySelector(selector);

      //if the place at the document exists
      if (element) {
        //set the html element to the region
        this.regions[key] = element;
      }
    }
  }

  //helper function for render
  //later to be implemented by inheretor classes like UserEdit
  onRender(): void {}

  //function to set how the view renders
  render(): void {
    //zeroes out the html before rendering
    this.parent.innerHTML = '';

    //creates an element called template
    const templateElement = document.createElement('template');

    //sets the html template coming from the class that is using the view
    templateElement.innerHTML = this.template();

    //runs the bindEvents function and passes in the content from the template
    this.bindEvents(templateElement.content);
    //runs the mapRegions function and passes in the content from the template
    this.mapRegions(templateElement.content);

    //helper function for render
    //right before our element get's showed into DOM
    this.onRender();

    //element gets showed into DOM
    this.parent.append(templateElement.content);
  }
}
