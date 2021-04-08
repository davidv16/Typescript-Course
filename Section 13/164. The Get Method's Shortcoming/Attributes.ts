import { UserProps } from './User';

export class Attributes<T> {
  constructor(private data: T) {}

  //return the content of the PropName
  get(propName: string): number | string {
    return this.data[propName];
  }

  //function to update the data object
  //takes in an update object
  set(update: T): void {
    //take all the new data in update and
    //overwrite the current data in this.data
    Object.assign(this.data, update);
  }
}
