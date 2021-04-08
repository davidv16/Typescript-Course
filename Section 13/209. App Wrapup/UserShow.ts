import { User, UserProps } from '../models/User';
import { View } from './View';

//class to show the user details
//inherets the view with the generec types of User and UserProps
export class UserShow extends View<User, UserProps> {
  //renders a html template of a user detail
  template(): string {
    return `
      <div>
        <h1>User Detail</h1>
        <div>User name: ${this.model.get('name')}</div>
        <div>User name: ${this.model.get('age')}</div>
      </div>
    `;
  }
}
