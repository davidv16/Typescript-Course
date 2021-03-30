"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
var dateStringToDate = function (dateString) {
    // 28/10/2018
    var dateParts = dateString
        //split the date string by /
        .split('/')
        //map the string values to number
        .map(function (value) {
        return parseInt(value);
    });
    //returns the month first
    //the month next minus 1 because the first month is 0 indexed
    //and the day.
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
exports.dateStringToDate = dateStringToDate;
