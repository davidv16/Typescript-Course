import { User, UserProps } from '../models/User';
import { CollectionView } from './CollectionView';
import { UserShow } from './UserShow';

//Class to render a list of users
//takes in the generics of Users and UserProps
export class UserList extends CollectionView<User, UserProps> {
  //function to render a div element containing each user
  //takes in the User information and the html element type
  renderItem(model: User, itemParent: Element): void {
    //creates an instance of UserShow and calls render from it.
    new UserShow(itemParent, model).render();
  }
}
