"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = exports.del = exports.post = exports.put = exports.get = void 0;
require("reflect-metadata");
var MetadataKeys_1 = require("./MetadataKeys");
var Methods_1 = require("./Methods");
//a reusable factory decorator to be able to use any rest call available
//takes in a a name of method "get" "put" "post" etc
function routeBinder(method) {
    return function (path) {
        //takes in the object we want to assign our metadata to
        //key on that specific object
        //and the descriptor
        return function (target, key, desc) {
            //define a path 
            //give it a value of path passed in
            //target - object we want to assign our metadata to
            //key - on that secific target object
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.path, path, target, key);
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.method, 'get', target, key);
        };
    };
}
//export the function above with different rest calls
exports.get = routeBinder(Methods_1.Methods.get);
exports.put = routeBinder(Methods_1.Methods.put);
exports.post = routeBinder(Methods_1.Methods.post);
exports.del = routeBinder(Methods_1.Methods.del);
exports.patch = routeBinder(Methods_1.Methods.patch);
