"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
var CsvFileReader_1 = require("./CsvFileReader");
var utils_1 = require("./utils");
var MatchReader = /** @class */ (function () {
    function MatchReader(reader) {
        this.reader = reader;
        //variable 'matches' to store the matches in a MatchData tuple
        this.matches = [];
    }
    //static function fromCsv.
    //takes in the filename and
    //returns an instance of MatchReader with an instance of CsvFileReader passed down to it.
    MatchReader.fromCsv = function (filename) {
        return new MatchReader(new CsvFileReader_1.CsvFileReader(filename));
    };
    //function to get the data that was retrieved from the csv file
    //and then convert the strings in each row to their rightful variables
    MatchReader.prototype.load = function () {
        this.reader.read();
        //change each string item in the row to appropriate type.
        //if need be.
        //[ '29/10/2018', 'Tottenham', 'Man City', '0', '1', 'A', 'K Friend' ],
        this.matches = this.reader.data.map(function (row) {
            return [
                //switch the first string to a date format
                utils_1.dateStringToDate(row[0]),
                //don't change row 2 and 3
                row[1],
                row[2],
                //change row 4 and 5 to numbers
                parseInt(row[3]),
                parseInt(row[4]),
                //change row 6 to a type of the enums we created
                row[5],
                row[6],
            ];
        });
    };
    return MatchReader;
}());
exports.MatchReader = MatchReader;
