export class Attributes<T> {
  constructor(private data: T) {}

  //we are looking up the given key on the interface of T to understand what type of value we are returning

  //return the content of the key
  // which is one of the prop names of the interface UserProps
  //We Use the generic K which can only be one of the T's
  //which are in fact one of the UserProps
  get = <K extends keyof T>(key: K): T[K] => {
    //return, Take that type T
    //whatever we passed in when we where referencing attributes
    //and lookup the type K inside there.
    return this.data[key];
  };

  //function to update the data object
  //takes in an update object
  set(update: T): void {
    //take all the new data in update and
    //overwrite the current data in this.data
    Object.assign(this.data, update);
  }

  getAll(): T {
    return this.data;
  }
}
