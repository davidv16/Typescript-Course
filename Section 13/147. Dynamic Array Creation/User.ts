interface UserProps {
  name?: string;
  age?: number;
}

type Callback = () => void;

export class User {
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

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
}
