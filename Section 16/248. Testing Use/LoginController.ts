import { NextFunction, Request, Response } from 'express';
import { get, controller, use } from './decorators';

function logger(req: Request, res: Response, next: NextFunction) {
  console.log('Request was made!!!')
  next();
}

//route route that is going to prefix all our routes
@controller('/auth')
class LoginController {
  //if at the url /login
  @get('/login')
  @use(logger)
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