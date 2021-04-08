"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
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
//instance of router
var router = express_1.Router();
exports.router = router;
//if at the url /login
router.get('/login', function (req, res) {
    //respond by displaying a login form
    res.send("\n    <form method=\"POST\">\n      <div>\n        <label>Email</label>\n        <input name=\"email\" />\n      </div>\n      <div>\n        <label>Password</label>\n        <input name=\"password\" type=\"password\" />\n      </div>\n      <button>Submit</button>\n    </form>\n  ");
});
//send post request from /login
router.post('/login', function (req, res) {
    //destructure the request body
    var _a = req.body, email = _a.email, password = _a.password;
    //if user is logged in
    //and if an email and a password exists
    if (email && password && email === 'hi@hi.com' && password === 'password') {
        //set req session logged in to true
        req.session = { loggedIn: true };
        //and redirect to home
        res.redirect('/');
    }
    else {
        //otherwise write message to screen
        res.send('Invalid email or password');
    }
});
//get request for root
router.get('/', function (req, res) {
    //if req session exists and is logged in
    if (req.session && req.session.loggedIn) {
        //write out a html message to screen
        res.send("\n      <div>\n        <div>You are logged in</div>\n        <a href=\"/logout\">Logout</a>\n      </div>\n    ");
        //otherwise write this message
    }
    else {
        res.send("\n      <div>\n        <div>You are not logged in</div>\n        <a href=\"/login\">Login</a>\n      </div>\n    ");
    }
});
//get function for the /logout route
router.get('/logout', function (req, res) {
    //set req session to undefined
    req.session = undefined;
    //and redirect to root
    res.redirect('/');
});
//get request for /protected route
//route requires authentication
router.get('/protected', requireAuth, function (req, res) {
    //welcomes user after login
    res.send('Welcome to protected route, logged in user');
});
