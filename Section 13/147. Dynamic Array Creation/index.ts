import { User } from './models/User';

const user = new User({});

user.set({ name: 'newname', age: 99929 });

user.on('change', () => {});
user.on('asdfadf', () => {});

console.log(user);
