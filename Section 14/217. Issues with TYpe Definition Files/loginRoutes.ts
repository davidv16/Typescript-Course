import { Router, Request, Response } from 'express';

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
router.post('/login', (req: Request, res: Response) => {
  //destructure the request body
  const { email, password } = req.body;

  // type check to check if the email exists
  if (email) {
    //then send the response email+password to screen
    res.send(email + password);
  } else {
    //if an email doesn't exist then send an error to screen
    res.send('You must provide an email property');
  }
});

export { router };
