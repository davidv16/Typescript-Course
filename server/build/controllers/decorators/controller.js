"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
require("reflect-metadata");
var AppRouter_1 = require("../../AppRouter");
var MetadataKeys_1 = require("./MetadataKeys");
//decorator that looks into the request body and makes sure that
//all the given keys are actually in there.
function bodyValidators(keys) {
    //we are going to look at req.body to make sure there is a body
    //then we make sure that all these keys above exist in there
    //if any of them dont we want to return the response with error message
    //otherwise we call our next function
    return function (req, res, next) {
        //if there isnt a body
        if (!req.body) {
            //respond with a 422 error
            res.status(422).send('Invalid request');
            return;
        }
        //run through all the keys
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            //if there isn't a body
            if (!req.body[key]) {
                //respond with a 422 error
                res.status(422).send('Invalid request');
                return;
            }
        }
        //then we move on to our next middleware by calling the next function.
        next();
    };
}
//controller factory decorator
//takes in a prefix of the route, can be "auth" "login" etc
function controller(routePrefix) {
    //takes in a target
    return function (target) {
        //makes an instance of the router
        var router = AppRouter_1.AppRouter.getInstance();
        //runs through the targets
        for (var key in target.prototype) {
            //gets the routeHandler to pass into the router at the bottom
            var routeHandler = target.prototype[key];
            //gets the path from the metadata to pass into the router
            var path = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.path, target.prototype, key);
            //gets the method to tell the router which method
            var method = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.method, target.prototype, key);
            //makes an array of middlewares to get them all together
            var middlewares = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.middleware, target.prototype, key) || [];
            //gathers the bodyProps that are required for validation
            var requiredBodyProps = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.validator, target.prototype, key) || [];
            //runs the bodyValidator with the required props
            var validator = bodyValidators(requiredBodyProps);
            //if path exists
            if (path) {
                //lookup the method from metadata in router
                //pass in the route prefix and path
                //run it through the body validator
                //and pass it to the routeHandler
                router[method].apply(router, __spreadArray(__spreadArray(["" + routePrefix + path], middlewares), [validator, routeHandler]));
            }
        }
    };
}
exports.controller = controller;
