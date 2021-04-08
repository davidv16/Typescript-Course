import { User, UserProps } from '../models/User';
import { View } from './View';

//class of UserForm that inherets from View
//and passes down types of User and UserProps
export class UserForm extends View<User, UserProps> {
  //function to map the events from the divs
  eventsMap(): { [key: string]: () => void } {
    return {
      //when divs with these classes are clicked
      //run these functions
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
      'click:.save-model': this.onSaveClick,
    };
  }

  //function to handle save click button
  //calls the save function from the backend model
  onSaveClick = (): void => {
    this.model.save();
  };

  //function to handle the set name click
  onSetNameClick = (): void => {
    //finds the input html element
    const input = this.parent.querySelector('input');

    //if the input html exists
    if (input) {
      //get it's value
      const name = input.value;

      //run set() from model and pass the value down
      this.model.set({ name });
    }
  };

  //function to handle set age click
  onSetAgeClick = (): void => {
    //call a function from model that sets a random age.
    this.model.setRandomAge();
  };

  //html template that writes up the user form for it to be rendered.
  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <div>User name: ${this.model.get('name')}</div>
        <div>User name: ${this.model.get('age')}</div>
        <input placeholder="${this.model.get('name')}" />
        <button class="set-name">Change Name</button>
        <button class="set-age">Set Random Age</button>
        <button class="save-model">Save user</button>
      </div>
    `;
  }
}
