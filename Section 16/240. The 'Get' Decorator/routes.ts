import 'reflect-metadata';


export function get(path: string) {
  return function(target: any, key: string, desc: PropertyDescriptor) {
    //define a path 
    //give it a value of path passed in
    //target - object we want to assign our metadata to
    //key - on that secific target object
    Reflect.defineMetadata('path', path, target, key);
  };
}