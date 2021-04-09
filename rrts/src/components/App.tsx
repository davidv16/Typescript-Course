import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';

//interface to set the rules of
//how the props are passed to the class
interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

//A check to change the state for the loading feature
interface AppState {
  fetching: boolean;
}

//the main app class but note that we named it _App
// because later we will pass it through redux as App
//takes in generics of AppProps and AppState
export class _App extends React.Component<AppProps, AppState>{
  constructor(props: AppProps) {
    super(props);

    //this is going to overwrite the state component
    //of react component base class
    this.state = { fetching: false };
  }

  //checks if the component was updated
  //passes in the previous props
  componentDidUpdate(prevProps: AppProps): void {
    //if previousprop doesn't exist and there exist a props
    if (!prevProps.todos.length && this.props.todos.length) {
      //then set state fetching to false
      this.setState({ fetching: false });
    }
  }
  //when button is clicked
  onButtonClick = (): void => {
    //get the todos through redux
    this.props.fetchTodos();
    //and set state fetching to true
    this.setState({ fetching: true });
  };

  //when todo is clicked
  //pass in the id number
  onTodoClick = (id: number): void => {
    //and run the deleteTodo
    this.props.deleteTodo(id);
  };

  //function to render the list
  //returns a jsx element
  renderList(): JSX.Element[] {
    //returns a map list of todos
    return this.props.todos.map((todo: Todo) => {
      return (
        // when a todo is clicked, pass in the id of it
        //and delete it
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
        {this.state.fetching ? 'LOADING' : null}
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