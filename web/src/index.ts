import { Collection } from './models/Collection';
import { User, UserProps } from './models/User';
import { UserList } from './views/UserList';

//create new instance of a all the users
//pass in the url and callback function that returns an instance of User.buildUser
const users = new Collection(
  'http://localhost:3000/users',
  (json: UserProps) => {
    return User.buildUser(json);
  }
);

//monitor changes of the root div element
users.on('change', () => {
  const root = document.getElementById('root');

  //if root exists
  if (root) {
    //create new list of users and render them.
    new UserList(root, users).render();
  }
});

//run a get request to get the users from the db
users.fetch();
