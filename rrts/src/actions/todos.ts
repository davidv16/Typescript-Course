import axios from 'axios';
import { Action, Dispatch } from 'redux';
import { ActionTypes } from './types';

//interfaces
//make sure we are returning actions from our action creators with the appropriate properties and the appropriate types

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

export interface DeleteTodoAction {
  //get the action type from the types enum
  type: ActionTypes.deleteTodo;
  payload: number;
}

//api url where we get our dummy data from
const url = 'https://jsonplaceholder.typicode.com/todos';

//action creator to get our todos
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

//delete action creator
//doesnt need to be an async action creator so we don't need to
//use redux thunk
//takes in an id of the todo
export const deleteTodo = (id: number): DeleteTodoAction => {
  //return an id of the todo
  //and type check that this is the correct action type
  return {
    type: ActionTypes.deleteTodo,
    payload: id,
  };
};
