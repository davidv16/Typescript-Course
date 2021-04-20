import { Request, Response } from 'express';
import { get, controller,  } from './decorators';

//route route that is going to prefix all our routes
@controller('/auth')
class LoginController {
  //if at the url /login
  @get('/login')
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