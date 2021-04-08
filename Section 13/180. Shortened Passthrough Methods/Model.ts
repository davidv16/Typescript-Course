import { AxiosPromise, AxiosResponse } from 'axios';

//interface to set the rules for Model class interacting with the Attributes class
//is of the generic type T
interface ModelAttributes<T> {
  set(value: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
}

//interface to allow Model class to interact with the Sync class
//is of the generic type T
interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

//interface to allow Model class to interact with the Sync class
interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

//interface to make sure there is no error that the class has an id.
interface HasId {
  id?: number;
}

//Model/instruction class for the User class to inherit
//makes the rules for the User class
//is the type of generic T and inherits the HasID interface
export class Model<T extends HasId> {
  constructor(
    //takes in an instance of Attributes class of type T
    //controlled by the interface ModelAttributes
    private attributes: ModelAttributes<T>,
    //takes in an instance of the Eventing class
    //controlled by the interface Events
    private events: Events,
    //takes in an instance of Sync class of the type T
    //controlled by the interface Sync
    private sync: Sync<T>
  ) {}

  //simplified getter function to run the on function from Eventing class
  on = this.events.on;
  //simplified getter function to run the trigger function from Eventing class
  trigger = this.events.trigger;
  //simplified getter function to run the get function from Attributes class
  get = this.attributes.get;

  //function to set the new data to the current attributes of User
  //takes in data of type T
  set(update: T): void {
    //calls the set function from Attributes class
    //and passes the update data to set modified item
    this.attributes.set(update);
    //calls the trigger function from Events class
    //and passes down the type of event
    this.events.trigger('change');
  }

  //function that calls the needed functions to GET the wanted data from the db
  //either all or single
  fetch(): void {
    //get the id from the current user and add it to the id variable
    const id = this.attributes.get('id');

    //checks if the id is a number or if it exists
    if (typeof id !== 'number') {
      //if not, throw an error
      throw new Error('Cannot fetch without an id');
    }

    //calls the fetch function from the Sync class and passes the id down
    //the fetch then responds with an AxiosResponse
    this.sync.fetch(id).then((response: AxiosResponse): void => {
      //then passes the data from the AxiosResponse to the
      //set function of the Attributes class
      this.attributes.set(response.data);
    });
  }

  //save function that calls the needed functions to save
  //either modified or new data to the db
  save(): void {
    this.sync
      //calls the save function from the sync class
      //and passes down all the attributes of the newly created user or modified user
      .save(this.attributes.getAll())
      //then recieves an AxiosResponse
      .then((response: AxiosResponse): void => {
        //if there was a response then trigger the save event
        this.trigger('save');
      })
      //else if there wasn't a response
      .catch(() => {
        //trigger an error event
        this.trigger('error');
      });
  }
}
