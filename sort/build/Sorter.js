"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
//abstract class that uses functions that haven't been implemented yet
//it cannot however be created as an object
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    //a function to sort the values in the data collection
    Sorter.prototype.sort = function () {
        //get the length of the collection
        var length = this.length;
        //run through the length of the collection in a step of 1 to check each item.
        for (var i = 0; i < length; i++) {
            //check the next number aside it.
            for (var j = 0; j < length - i - 1; j++) {
                //compare the number and the next number
                //if the left number is larger than the right number
                if (this.compare(j, j + 1)) {
                    //then swap the numbers
                    this.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
