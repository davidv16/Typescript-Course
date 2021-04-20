import { Router, Request, Response, NextFunction, response } from 'express';
import { get } from 'node:http';

//route route that is going to prefix all our routes
@controller('/')
class LoginController {
  @get('/login')
  //if at the url /login
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
}