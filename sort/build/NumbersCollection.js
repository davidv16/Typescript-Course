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
exports.NumbersCollection = void 0;
var Sorter_1 = require("./Sorter");
var NumbersCollection = /** @class */ (function (_super) {
    __extends(NumbersCollection, _super);
    //define a public property named data of the type number array
    //pass it down to the constructor
    function NumbersCollection(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        return _this;
    }
    Object.defineProperty(NumbersCollection.prototype, "length", {
        //return the length of the data collection
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    //compare numeric value every two numbers in the collection
    NumbersCollection.prototype.compare = function (leftIndex, rightIndex) {
        //return true if left number is higher than right number
        return this.data[leftIndex] > this.data[rightIndex];
    };
    //swap the numbers if the left number is higher than right
    NumbersCollection.prototype.swap = function (leftIndex, rightIndex) {
        //put the left number in a variable
        var leftHand = this.data[leftIndex];
        //set the right number to the left number
        this.data[leftIndex] = this.data[rightIndex];
        //set the left number variable to the right number.
        this.data[rightIndex] = leftHand;
    };
    return NumbersCollection;
}(Sorter_1.Sorter));
exports.NumbersCollection = NumbersCollection;
