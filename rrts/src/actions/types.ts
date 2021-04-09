import { DeleteTodoAction, FetchTodosAction } from './todos';

//enum of the types of actions
export enum ActionTypes {
  fetchTodos,
  deleteTodo,
}

//group together the action types into one action.
export type Action = FetchTodosAction | DeleteTodoAction;
