"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
var utils_1 = require("../utils");
var CsvFileReader_1 = require("./CsvFileReader");
//class MatchReader that inherits the class CsvFileReader and sends MatchData tuple as a type to it.
var MatchReader = /** @class */ (function (_super) {
    __extends(MatchReader, _super);
    function MatchReader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //implements the mapRow Promised by the abstract CsvFileReader
    MatchReader.prototype.mapRow = function (row) {
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
    };
    return MatchReader;
}(CsvFileReader_1.CsvFileReader));
exports.MatchReader = MatchReader;
