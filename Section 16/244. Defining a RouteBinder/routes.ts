import 'reflect-metadata';


function routeBinder(method: string){
  return function(path: string) {
    return function(target: any, key: string, desc: PropertyDescriptor) {
      //define a path 
      //give it a value of path passed in
      //target - object we want to assign our metadata to
      //key - on that secific target object
      Reflect.defineMetadata('path', path, target, key);
      Reflect.defineMetadata('method', 'get', target, key);
    };
  };
}

export const get = routeBinder('get');
export const put = routeBinder('put');
export const post = routeBinder('post');
export const del = routeBinder('del');
export const patch = routeBinder('patch');