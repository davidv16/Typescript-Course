import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys';

//factory decorator to validate the request body
//takes in a spreaded array of strings
export function bodyValidator(...keys: string[]) {
  //takes in the object we want to assign our metadata to
   //key on that specific object
   //and the descriptor
  return function(target: any, key: string, desc: PropertyDescriptor) {
    //define the object
    //give it a value of path passed in
    //target - object we want to assign our metadata to
    //key - on that secific target object
    Reflect.defineMetadata(MetadataKeys.validator, keys, target, key);
  }
}
