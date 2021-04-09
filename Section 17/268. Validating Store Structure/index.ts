import { combineReducers } from 'redux';
import { Todo } from '../actions';
import { todosReducer } from './todos';

//an interface that describes the entire state
//of our redux store
export interface StoreState {
  todos: Todo[];
}

//combineReducers a generic function
//sends in an interface as a generic that ensures
//that this function is returning a value of type array of Todos
export const reducers = combineReducers<StoreState>({
  //assign the todosReducer to the key of todos
  todos: todosReducer,
});
