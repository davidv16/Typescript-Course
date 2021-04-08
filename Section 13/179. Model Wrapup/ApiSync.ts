import axios, { AxiosPromise, AxiosResponse } from 'axios';

//interface to make sure there is no error that the class has an id.
interface HasID {
  id?: number;
}

//Class ApiSync of the Type T and inherits the HasID interface
export class ApiSync<T extends HasID> {
  //takes in the root url
  constructor(public rootURL: string) {}

  //GET request function that calls the API with http request
  //can get all and single,
  //id is optional
  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootURL}/${id}`);
  }

  //POST or PUT function that sends the API requests via http
  //takes in data of a generic Type
  save(data: T): AxiosPromise {
    //variable to deconstruct the id from the data object
    const { id } = data;

    //if there exists an id in the object
    if (id) {
      //then send an axios PUT request and the data with it to change the db item
      return axios.put(`${this.rootURL}/${id}`, data);
    } else {
      //otherwise send an axios POST request with the new data to append to the db
      return axios.post(this.rootURL, data);
    }
  }
}
