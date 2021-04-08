import { ApiSync } from './ApiSync';
import { Attributes } from './Attributes';
import { Model } from './Model';
import { Eventing } from './Eventing';

//interface to set the rules for which properties may be sent down to the User class
export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

//root url variable
const rootUrl = 'http://localhost:3000/users';

//User class that inherits the Modelclass with the type of UserProps
export class User extends Model<UserProps> {
  //function to build a new user
  //takes in attributes of the type/Interface of UserProps
  //returns an instance of User
  static buildUser(attrs: UserProps): User {
    return new User(
      //Create an instance of the Attributes class of the type/interface of UserProps to handle changes of user
      //and pass down attr
      new Attributes<UserProps>(attrs),
      //Create an instance of the Eventing class to handle events
      new Eventing(),
      //Create an instance of the ApiSync of the type of UserProps to handle the REST requests to the db and other
      //and pass down the main url
      new ApiSync<UserProps>(rootUrl)
    );
  }
}
