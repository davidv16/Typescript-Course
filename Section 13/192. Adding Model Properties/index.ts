import { User } from './models/User';
import { UserForm } from './views/UserForm';

const user = User.buildUser({ name: 'NAME', age: 20 });

const userForm = new UserForm(document.getElementById('root'), user);

userForm.render();
