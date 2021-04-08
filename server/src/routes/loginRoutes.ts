import { Router, Request, Response, NextFunction, response } from 'express';

//interface to make a type check for Request types
//Because the type definition file is poorly written
//and Request body can be any
//instead we make our own type definition
interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

//custom middleware to require authentication
//takes in request, response and the next function
//next function is what the middleware does after it has
//dealt with the req and res
function requireAuth(req: Request, res: Response, next: NextFunction) {
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
const router = Router();

//if at the url /login
router.get('/login', (req: Request, res: Response) => {
  //respond by displaying a login form
  res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email" />
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password" />
      </div>
      <button>Submit</button>
    </form>
  `);
});

//send post request from /login
router.post('/login', (req: RequestWithBody, res: Response) => {
  //destructure the request body
  const { email, password } = req.body;

  //if user is logged in
  //and if an email and a password exists
  if (email && password && email === 'hi@hi.com' && password === 'password') {
    //set req session logged in to true
    req.session = { loggedIn: true };
    //and redirect to home
    res.redirect('/');
  } else {
    //otherwise write message to screen
    res.send('Invalid email or password');
  }
});

//get request for root
router.get('/', (req: Request, res: Response) => {
  //if req session exists and is logged in
  if (req.session && req.session.loggedIn) {
    //write out a html message to screen
    res.send(`
      <div>
        <div>You are logged in</div>
        <a href="/logout">Logout</a>
      </div>
    `);
    //otherwise write this message
  } else {
    res.send(`
      <div>
        <div>You are not logged in</div>
        <a href="/login">Login</a>
      </div>
    `);
  }
});

//get function for the /logout route
router.get('/logout', (req: Request, res: Response) => {
  //set req session to undefined
  req.session = undefined;
  //and redirect to root
  res.redirect('/');
});

//get request for /protected route
//route requires authentication
router.get('/protected', requireAuth, (req: Request, res: Response) => {
  //welcomes user after login
  res.send('Welcome to protected route, logged in user');
});

export { router };
