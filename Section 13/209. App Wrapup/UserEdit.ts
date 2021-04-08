import { User, UserProps } from '../models/User';
import { UserForm } from './UserForm';
import { UserShow } from './UserShow';
import { View } from './View';

//Class for displaying the user and the input form
//inherits from View which takes in the generics of User and UserProps
export class UserEdit extends View<User, UserProps> {
  //function to store the css class elements for each div
  //takes in some string sometime
  regionsMap(): { [key: string]: string } {
    //returns the css class elements
    return {
      userShow: '.user-show',
      userForm: '.user-form',
    };
  }

  //helper function that runs when the render function in view is rendered
  //inhereted from View but implemented here
  onRender(): void {
    //creates and instance of UserShow and passes in the css region
    //also passes the user info
    //and calls for rendering
    new UserShow(this.regions.userShow, this.model).render();
    //creates and instance of UserForm and passes in the css region
    //also passes the user info
    //and calls for rendering
    new UserForm(this.regions.userForm, this.model).render();
  }

  //The html template for rendering a user show and a user form as one div
  template(): string {
    return `
      <div>
        <div class="user-show"></div>
        <div class="user-form"></div>
      </div>
    `;
  }
}
