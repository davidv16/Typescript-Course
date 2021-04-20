import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys';
import { Methods } from './Methods';


function routeBinder(method: string){
  return function(path: string) {
    return function(target: any, key: string, desc: PropertyDescriptor) {
      //define a path 
      //give it a value of path passed in
      //target - object we want to assign our metadata to
      //key - on that secific target object
      Reflect.defineMetadata(MetadataKeys.path, path, target, key);
      Reflect.defineMetadata(MetadataKeys.method, 'get', target, key);
    };
  };
}

export const get = routeBinder(Methods.get);
export const put = routeBinder(Methods.put);
export const post = routeBinder(Methods.post);
export const del = routeBinder(Methods.del);
export const patch = routeBinder(Methods.patch);