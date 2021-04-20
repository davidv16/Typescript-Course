import express from "express";

//the router for the program
export class AppRouter {
  //an instance of express router
  private static instance: express.Router;

  //static function to get the instance without making an instance of the class
  static getInstance(): express.Router {
    //if an instance doesn't exists
    if(!AppRouter.instance) {
      //make one.
      AppRouter.instance = express.Router();
    }

    //and return it.
    return AppRouter.instance;
  }
}