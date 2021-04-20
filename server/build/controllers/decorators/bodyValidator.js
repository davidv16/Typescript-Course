"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bodyValidator = void 0;
require("reflect-metadata");
var MetadataKeys_1 = require("./MetadataKeys");
//factory decorator to validate the request body
//takes in a spreaded array of strings
function bodyValidator() {
    var keys = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        keys[_i] = arguments[_i];
    }
    //takes in the object we want to assign our metadata to
    //key on that specific object
    //and the descriptor
    return function (target, key, desc) {
        //define the object
        //give it a value of path passed in
        //target - object we want to assign our metadata to
        //key - on that secific target object
        Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.validator, keys, target, key);
    };
}
exports.bodyValidator = bodyValidator;
