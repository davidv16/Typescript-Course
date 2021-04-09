import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

export class _App extends React.Component<AppProps>{
  onButtonClick = (): void => {
    this.props.fetchTodos();
  };

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return (
        <div onClick={() => this.onTodoClick(todo.id)} key={todo.id}>
          {todo.title}
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.renderList()}
      </div>
    );
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
  //object containing our fetch todos and deleteTodo
  { fetchTodos, deleteTodo }
  //and pass the _App to the export of App
)(_App);