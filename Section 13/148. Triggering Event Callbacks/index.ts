import { User } from './models/User';

const user = new User({});

user.set({ name: 'newname', age: 99929 });

user.on('change', () => {
  console.log('change #1');
});
user.on('change', () => {
  console.log('change #2');
});
user.on('save', () => {
  console.log('save was triggered');
});

user.trigger('save');
