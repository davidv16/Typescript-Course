"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
//Create an instance of MatchReader and pass in something satisfying
//the 'DataReader' interface
//note that the instance is not created with the new keyword
//because the static function already generates a new instance in the MatchReader class
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
//create an instance of Summary and run the static function to check how many wins Man United had
//note that the instance is not created with the new keyword
//because the static function already generates a new instance in the Summary class
var summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
//Change the strings from the matches in the right variables
matchReader.load();
//write out an html report and pass in the upgraded matches(that is after the strings are fixed)
summary.buildAndPrintReport(matchReader.matches);
