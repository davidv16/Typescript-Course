"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = require("./decorators");
//custom middleware to require authentication
//takes in request, response and the next function
//next function is what the middleware does after it has
//dealt with the req and res
function requireAuth(req, res, next) {
    //if the request session exists
    //and the request session is logged in
    if (req.session && req.session.loggedIn) {
        //run the next function
        next();
        return;
    }
    //if the session is not logged in
    //send 403 status
    res.status(403);
    //and write not permitted to the screen
    res.send('Not permitted');
}
var RootController = /** @class */ (function () {
    function RootController() {
    }
    //get request for root
    RootController.prototype.getRoot = function (req, res) {
        //if req session exists and is logged in
        if (req.session && req.session.loggedIn) {
            //write out a html message to screen
            res.send("\n        <div>\n          <div>You are logged in</div>\n          <a href=\"/auth/logout\">Logout</a>\n        </div>\n      ");
            //otherwise write this message
        }
        else {
            res.send("\n        <div>\n          <div>You are not logged in</div>\n          <a href=\"/auth/login\">Login</a>\n        </div>\n      ");
        }
    };
    //when at the /protected route
    //get request for /protected route
    //route requires authentication
    RootController.prototype.getProtected = function (req, res) {
        //welcomes user after login
        res.send('Welcome to protected route, logged in user');
    };
    __decorate([
        decorators_1.get('/'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], RootController.prototype, "getRoot", null);
    __decorate([
        decorators_1.get('/protected')
        //require authentication
        ,
        decorators_1.use(requireAuth),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], RootController.prototype, "getProtected", null);
    RootController = __decorate([
        decorators_1.controller('')
    ], RootController);
    return RootController;
}());
