import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import express, { Request, Response } from 'express';
import { router } from './routes/loginRoutes';
import './controllers/LoginController';
import { AppRouter } from './AppRouter';

const app = express();

//wire upp the bodyParser middleware to be able to send a post request
//has to be above the app.use(router)
app.use(bodyParser.urlencoded({ extended: true }));

//wire up cookie session middleware
//to be able to add session to req
app.use(cookieSession({ keys: ['lasdfg'] }));

//tells the app to use the router from loginRoutes
app.use(router);

//tells the app to use router from controller decorator
app.use(AppRouter.getInstance());

//run the listen function
//so that the app can listen on port 3000
//and pass in a callback function that response with the console log.
app.listen(3000, () => {
  console.log('listening on port 3000');
});
