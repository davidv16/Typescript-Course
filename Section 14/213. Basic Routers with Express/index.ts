import express, { Request, Response } from 'express';

const app = express();

//app calls a get request to / route
//and get's a callback repsonse that responds with html
app.get('/', (req: Request, res: Response) => {
  res.send(`
  <div>
    <h1>Hi there!</h1>
  </div>`);
});

//run the listen function
//so that the app can listen on port 3000
//and pass in a callback function that response with the console log.
app.listen(3000, () => {
  console.log('listening on port 3000');
});
