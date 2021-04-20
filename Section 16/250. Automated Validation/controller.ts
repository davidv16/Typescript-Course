import { Request, Response, NextFunction, RequestHandler } from 'express';
import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';
import { MetadataKeys } from './MetadataKeys';
import { Methods } from './Methods';

//decorator that looks into the request body and makes sure that
//all the given keys are actually in there.
function bodyValidators(keys: string): RequestHandler {
  //we are going to look at req.body to make sure there is a body
  //then we make sure that all these keys above exist in there
  //if any of them dont we want to return the response with error message
  //otherwise we call our next function
  return function(req: Request, res: Response, next: NextFunction) {
    //if there isnt a body
    if(!req.body) {
      //respond with a 422 error
      res.status(422).send('Invalid request');
      return;
    }
    //run through all the keys
    for(let key of keys) {
      //if there isn't a body
      if(!req.body[key]){
        //respond with a 422 error
        res.status(422).send('Invalid request');
        return;
      }
    }
    //then we move on to our next middleware by calling the next function.
    next();
  }
}

export function controller(routePrefix: string) {
  return function(target: Function) {
    const router = AppRouter.getInstance();
    for(let key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata(MetadataKeys.path, target.prototype, key);
      const method: Methods = Reflect.getMetadata(MetadataKeys.method, target.prototype, key);
      const middlewares = Reflect.getMetadata(MetadataKeys.middleware, target.prototype, key) || [];
      const requiredBodyProps = Reflect.getMetadata(MetadataKeys.validator, target.prototype, key) || [];

      const validator = bodyValidators(requiredBodyProps);
      //if path exists
      if(path) {
        //lookup the method from metadata in router
        //pass in the route prefix and path
        //run it through the body validator
        //and pass it to the routeHandler
        router[method](`${routePrefix}${path}`, ...middlewares, validator, routeHandler);
      }

    }
  };
}