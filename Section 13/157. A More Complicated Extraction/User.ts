import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  public events: Eventing = new Eventing();

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
}
