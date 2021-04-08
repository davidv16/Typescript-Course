interface UserProps {
  name?: string;
  age?: number;
}

type Callback = () => {};

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

  on(eventName: string, callback: Callback) {}
}
