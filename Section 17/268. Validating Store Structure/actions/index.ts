import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

//interface to set the rules for the
//todo that we get from the api
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

//type to validate the object we are passing in.
export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

//api url where we get our dummy data from
const url = 'https://jsonplaceholder.typicode.com/todos';

//function to get our todos
export const fetchTodos = () => {
  //returns an asynchronous function of an axios request
  return async (dispatch: Dispatch) => {
    //axios request of the generic type of Todo
    const response = await axios.get<Todo[]>(url);

    //redux function that passes in a type validation
    dispatch<FetchTodosAction>({
      //type validation what we are about to get
      type: ActionTypes.fetchTodos,
      //the real dada from the response.
      payload: response.data,
    });
  };
};
