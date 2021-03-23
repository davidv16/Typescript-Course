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
exports.CharactersCollection = void 0;
var Sorter_1 = require("./Sorter");
var CharactersCollection = /** @class */ (function (_super) {
    __extends(CharactersCollection, _super);
    //define a public property named data of the type string
    //pass it down to the constructor
    function CharactersCollection(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        return _this;
    }
    Object.defineProperty(CharactersCollection.prototype, "length", {
        //return the length of the data collection
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    //compare ascii numeric value of every two characters in the collection
    CharactersCollection.prototype.compare = function (leftIndex, rightIndex) {
        return (
        //put both left and right character to lower case and check if the left is higher than the right
        this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    };
    CharactersCollection.prototype.swap = function (leftIndex, rightIndex) {
        //split the characters from the string up to an array
        var characters = this.data.split('');
        //store the first character value in a temp variable
        var leftHand = characters[leftIndex];
        //set the right character value to the left character value
        characters[leftIndex] = characters[rightIndex];
        //set the temp variable to the right character value
        characters[rightIndex] = leftHand;
        //join the characters again to a string.
        this.data = characters.join('');
    };
    return CharactersCollection;
}(Sorter_1.Sorter));
exports.CharactersCollection = CharactersCollection;
