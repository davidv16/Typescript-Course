import { RequestHandler } from "express";
import "reflect-metadata";
import { MetadataKeys } from "./MetadataKeys";

export function use(middleware: RequestHandler) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    const middlewares =
      Reflect.getMetadata(
        //rather than storing a single middleware
        //we're going to look into this Metadata key property of middleware
        //and store an array there to store a bunch of different middlewares
        MetadataKeys.middleware,
        target,
        key
        //we first look at the middleware property above and if it doesn't exist
        //we assign an empty array to middlewares.
      ) || [];

    //push middleware to an array of middlewares
    middlewares.push(middleware);

    //add the new array of middlewares into the metadata
    Reflect.defineMetadata(MetadataKeys.middleware, middlewares, target, key);
  };
}
