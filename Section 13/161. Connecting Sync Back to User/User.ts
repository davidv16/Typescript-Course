import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';
import { Sync } from './Sync';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);

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
