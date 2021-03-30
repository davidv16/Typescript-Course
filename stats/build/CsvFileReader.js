"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
var fs_1 = __importDefault(require("fs"));
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(filename) {
        this.filename = filename;
        //variable 'data' to store an array of strings
        this.data = [];
    }
    //function to read from file
    CsvFileReader.prototype.read = function () {
        //read the file and pass in to the data array
        this.data = fs_1.default
            .readFileSync(this.filename, {
            encoding: 'utf-8',
        })
            //split on new line
            .split('\n')
            //change each row of string to an array of strings
            .map(function (row) {
            //split the row by comma and map the items into an sub array.
            return row.split(',');
        });
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
