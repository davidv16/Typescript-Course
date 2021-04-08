import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';

//class to get a collection of T (in our case users)
//takes in two generics, T and K
//T being an array of Users
//K being the user props
export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  //takes in the rootURL and
  //a callback function taking in the userProps and returning array of Users or the type T
  constructor(public rootUrl: string, public deserialize: (json: K) => T) {}

  //getter function to call the on function from events.
  get on() {
    return this.events.on;
  }

  //getter function to call the trigger function from events.
  get trigger() {
    return this.events.trigger;
  }

  //Function to get a collection of users from the db
  fetch(): void {
    //axios http get request that takes in the URL
    //then responds with an AxiosResponse
    axios.get(this.rootUrl).then((response: AxiosResponse) => {
      //run through the data from the response wiht the value of K
      response.data.forEach((value: K) => {
        //and push the deserialized value onto a local array of T
        this.models.push(this.deserialize(value));
      });
      //and trigger the event 'change'
      this.trigger('change');
    });
  }
}
