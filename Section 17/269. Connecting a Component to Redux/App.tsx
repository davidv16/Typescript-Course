import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}

export class _App extends React.Component<AppProps>{
  render() {
    return <div>Hi there!</div>;
  }
}

//a function to map the state to props
//takes in a state from StoreState interface
//returns an array of todos
const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return { todos: state.todos };
};

//make a new export for the App class
export const App = connect(
  //run the mapStateToProps function
  mapStateToProps,
  //object containing our fetch todos
  { fetchTodos }
  //and pass the _App to the export of App
)(_App);