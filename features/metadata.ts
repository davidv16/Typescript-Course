import 'reflect-metadata';

@controller
class Plane {
  color: string = 'red';

  @get('/login')
  fly(): void {
    console.log('vrrr');
  }
}

// decorator function
//takes in url path
function get(path: string) {
  // takes in the target of class Plane
  //takes in a key
  return function (target: Plane, key: string) {
    //attach meta data to whatever get's decorated
    //defines a meta data of 'path' with a value of path
    //to the target with the key
    Reflect.defineMetadata('path', path, target, key);
  };
}

//decorator to control where routes go.
//takes in the class Plane
function controller(target: typeof Plane) {
  //forloop is going to iterate through all the key's
  // of the prototype
  //the word key is first going to be equal to fly
  for (let key in target.prototype) {
    //then we're going to look for the word 'path' of the target prototype
    //and then the first key is going to be fly that we pass in
    const path = Reflect.getMetadata('path', target.prototype, key);
    const middleware = Reflect.getMetadata('middleware', target.prototype);

    //whenever someone makes a get request to this path, apply middleware
    //and eventually the target.prototypes router handler
    router.get(path, middleware target.prototype[key]);
  }
}
