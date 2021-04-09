import { Todo, Action, ActionTypes } from '../actions';

//A reducer to handle action of type FetchTodosAction
//takes in a state of Todo array and initializes it
//also takes in action of the type FetchTodosAction or DeleteTodosAction from the interface in index.ts
export const todosReducer = (state: Todo[] = [], action: Action) => {
  //checks if the action type is of type fetchTodos
  //this is to guarantee that none of our reducers
  //respond incorrectly to an action
  //and secondly to get the initial default value of state
  //of our reducers as well.
  //redux dispatches it's own type of action to our reducers
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    default:
      //otherwise return empty array
      return state;
  }
};
