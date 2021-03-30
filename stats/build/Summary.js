"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var HtmlReport_1 = require("./reportTargets/HtmlReport");
//class that ties together the matches and report
//When making an instance of Summary, one can decide where to send the report, to the console class or the HtmlReport class
var Summary = /** @class */ (function () {
    //constructor to set the rules of which classes it can take, according to the interface above
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    //static function that can be run without creating an instance of the summary class
    //takes in a team name to pass it on to the Analysis class
    Summary.winsAnalysisWithHtmlReport = function (team) {
        //returns a new instance of Summary with the two interfaces on top.
        return new Summary(new WinsAnalysis_1.WinsAnalysis(team), new HtmlReport_1.HtmlReport());
    };
    //function to run the wins check and print the report
    Summary.prototype.buildAndPrintReport = function (matches) {
        //runs the analyzer to check how many matches a certain team won
        var output = this.analyzer.run(matches);
        //outputs the wins and the team to the report decided by the static function above.
        this.outputTarget.print(output);
    };
    return Summary;
}());
exports.Summary = Summary;
