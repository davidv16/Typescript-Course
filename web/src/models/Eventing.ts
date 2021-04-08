//type alias to save coding
//makes a new type Called "Callback" that is an empty arrow function that returns void
type Callback = () => void;

export class Eventing {
  //Property of events, can be any event such as
  //change, hover, click, mousover etc.
  events: { [key: string]: Callback[] } = {};

  //function that runs on event
  //takes in event name
  //and callback function
  on = (eventName: string, callback: Callback): void => {
    //to guarantee that the handlers is going to be an array
    //we set the or attribute and empty array
    //take in the event array with the eventName
    const handlers = this.events[eventName] || [];
    //add in a brand new callback
    handlers.push(callback);
    //take the handlers array and assign it to this.event object
    this.events[eventName] = handlers;
  };

  //function to manually trigger an event
  trigger = (eventName: string): void => {
    //variable to check if there exists an event with this name
    //eventName can be an event or undefined
    const handlers = this.events[eventName];

    //if there are no handlers
    //or if there are no handlers inside the array
    if (!handlers || handlers.length === 0) {
      //return early
      return;
    }

    //for each handler in the array
    handlers.forEach((callback) => {
      //run it's callback
      callback();
    });
  };
}
