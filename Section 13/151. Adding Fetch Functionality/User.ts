import axios, { AxiosResponse } from 'axios';

interface UserProps {
  name?: string;
  age?: number;
}

type Callback = () => void;

export class User {
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  //return the content of the PropName
  get(propName: string): number | string {
    return this.data[propName];
  }

  //function to update the data object
  //takes in an update object
  set(update: UserProps): void {
    //take all the new data in update and
    //overwrite the current data in this.data
    Object.assign(this.data, update);
  }

  //function that runs on event
  //takes in event name
  //and callback function
  on(eventName: string, callback: Callback): void {
    //to guarantee that the handlers is going to be an array
    //we set the or attribute and empty array
    //take in the event array with the eventName
    const handlers = this.events[eventName] || [];
    //add in a brand new callback
    handlers.push(callback);
    //take the handlers array and assign it to this.event object
    this.events[eventName] = handlers;
  }

  //function to manually trigger an event
  trigger(eventName: string): void {
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
  }

  fetch(): void {
    axios
      .get(`http://localhost:3000/users/${this.get('id')}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
  }
}
