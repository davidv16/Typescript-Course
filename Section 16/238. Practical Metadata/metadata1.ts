import 'reflect-metadata';

//const plane = {
//  color: 'red',
//};
//
//Reflect.defineMetadata('note', 'hi there', plane, 'color');
//
//const note = Reflect.getMetadata('note', plane, 'color');
//
//console.log(note);

@printMetadata
class Plane {
  color: string = 'red';

  @markFunction('HI THERE')
  fly(): void {
    console.log('vrrr');
  }
}
// decorator function
// takes in the target of class Plane
//takes in a key
function markFunction(secretInfo: string) {
  return function (target: Plane, key: string) {
    //attach meta data to whatever get's decorated
    //defines a meta data of 'secret with a value of 123
    //to the target with the key
    Reflect.defineMetadata('secret', secretInfo, target, key);
  };
}

//to retrieve this information we can reach into Plane's prototype
//and try to print out the information associated with the fly method
const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');

//a decorator function to print out the metadata of the class above
//takes in the class Plane
function printMetadata(target: typeof Plane) {
  //forloop is going to iterate through all the key's
  // of the prototype
  //the word key is first going to be equal to fly
  for (let key in target.prototype) {
    //then we're going to look for the word 'secret' of the target prototype
    //and then the first key is going to be fly that we pass inn
    const secret = Reflect.getMetadata('secret', target.prototype, key);
    console.log(secret);
  }
}
