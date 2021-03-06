"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var express_1 = __importDefault(require("express"));
require("./controllers/LoginController");
require("./controllers/RootController");
var AppRouter_1 = require("./AppRouter");
//pass an express() instance to app variable
var app = express_1.default();
//wire upp the bodyParser middleware to be able to send a post request
//has to be above the app.use(router)
app.use(body_parser_1.default.urlencoded({ extended: true }));
//wire up cookie session middleware
//to be able to add session to req
app.use(cookie_session_1.default({ keys: ['lasdfg'] }));
//tells the app to use router from controller decorator
app.use(AppRouter_1.AppRouter.getInstance());
//run the listen function
//so that the app can listen on port 3000
//and pass in a callback function that response with the console log.
app.listen(3000, function () {
    console.log('listening on port 3000');
});
