"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.use = void 0;
require("reflect-metadata");
var MetadataKeys_1 = require("./MetadataKeys");
//decorator to assign middleware like "require authentication" to classes
function use(middleware) {
    //takes in the object we want to assign our metadata to
    //key on that specific object
    //and the descriptor
    return function (target, key, desc) {
        var middlewares = Reflect.getMetadata(
        //rather than storing a single middleware
        //we're going to look into this Metadata key property of middleware
        //and store an array there to store a bunch of different middlewares
        MetadataKeys_1.MetadataKeys.middleware, target, key
        //we first look at the middleware property above and if it doesn't exist
        //we assign an empty array to middlewares.
        ) || [];
        //push middleware to an array of middlewares
        middlewares.push(middleware);
        //add the new array of middlewares into the metadata
        Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.middleware, middlewares, target, key);
    };
}
exports.use = use;
