"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRouter = void 0;
var express_1 = __importDefault(require("express"));
//the router for the program
var AppRouter = /** @class */ (function () {
    function AppRouter() {
    }
    //static function to get the instance without making an instance of the class
    AppRouter.getInstance = function () {
        //if an instance doesn't exists
        if (!AppRouter.instance) {
            //make one.
            AppRouter.instance = express_1.default.Router();
        }
        //and return it.
        return AppRouter.instance;
    };
    return AppRouter;
}());
exports.AppRouter = AppRouter;
