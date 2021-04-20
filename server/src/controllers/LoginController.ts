import { Request, Response } from 'express';
import { get, controller, post, bodyValidator } from './decorators';

//route route that is going to prefix all our routes
@controller('/auth')
class LoginController {

  //when at the url /login
  @get('/login')
  //function to return the login form
  getLogin(req: Request, res: Response): void {
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
  }

  //when at /login and is making a post request
  @post('/login')
  //run the email and password through the body validator
  @bodyValidator('email', 'password')
  //send post request from /login
  postLogin(req: Request, res: Response) {
    //destructure the request body
    const { email, password } = req.body;

    //if user is logged in
    if (email === 'hi@hi.com' && password === 'password') {
      //set req session logged in to true
      req.session = { loggedIn: true };
      //and redirect to home
      res.redirect('/');
    } else {
      //otherwise write message to screen
      res.send('Invalid email or password');
    }
  }

  //when at the /logout route
  @get('/logout')
  //get function for the /logout route
  getLogout(req: Request, res: Response) {
    //set req session to undefined
    req.session = undefined;
    //and redirect to root
    res.redirect('/');
  }
}