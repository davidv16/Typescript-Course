import { NextFunction, Request, Response } from 'express';
import { controller, get, use } from './decorators';

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

@controller('')
class RootController {
  @get('/')
  //get request for root
  getRoot(req: Request, res: Response) {
    //if req session exists and is logged in
    if (req.session && req.session.loggedIn) {
      //write out a html message to screen
      res.send(`
        <div>
          <div>You are logged in</div>
          <a href="/auth/logout">Logout</a>
        </div>
      `);
      //otherwise write this message
    } else {
      res.send(`
        <div>
          <div>You are not logged in</div>
          <a href="/auth/login">Login</a>
        </div>
      `);
    }
  }

  //when at the /protected route
  @get('/protected')
  //require authentication
  @use(requireAuth)
  //get request for /protected route
  //route requires authentication
  getProtected(req: Request, res: Response) {
    //welcomes user after login
    res.send('Welcome to protected route, logged in user');
  }

}