import axios, { AxiosPromise, AxiosResponse } from 'axios';
import { UserProps } from './User';

export class Sync {
  constructor(public rootURL: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootURL}/${id}`);
  }

  save(data: UserProps): AxiosPromise {
    const { id } = data;

    if (id) {
      return axios.put(`${this.rootURL}/${id}`, data);
    } else {
      return axios.post(this.rootURL, data);
    }
  }
}
