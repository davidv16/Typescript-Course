import { RequestHandler } from 'express';
import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys';
import { Methods } from './Methods';

//an interface to limit how we use property descriptor
//interface to doublecheck that if the descriptor has a value
//then that value should be of type RequestHandler
interface RouteHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}

//a reusable factory decorator to be able to use any rest call available
//takes in a a name of method "get" "put" "post" etc
function routeBinder(method: string){
  return function(path: string) {
   //takes in the object we want to assign our metadata to
   //key on that specific object
   //and the descriptor
    return function(target: any, key: string, desc: RouteHandlerDescriptor) {
      //define a path 
      //give it a value of path passed in
      //target - object we want to assign our metadata to
      //key - on that secific target object
      Reflect.defineMetadata(MetadataKeys.path, path, target, key);
      Reflect.defineMetadata(MetadataKeys.method, 'get', target, key);
    };
  };
}


//export the function above with different rest calls
export const get = routeBinder(Methods.get);
export const put = routeBinder(Methods.put);
export const post = routeBinder(Methods.post);
export const del = routeBinder(Methods.del);
export const patch = routeBinder(Methods.patch);