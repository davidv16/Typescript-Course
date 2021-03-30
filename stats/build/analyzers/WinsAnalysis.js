"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
var MatchResult_1 = require("../MatchResult");
var WinsAnalysis = /** @class */ (function () {
    function WinsAnalysis(team) {
        this.team = team;
    }
    //run the win check
    WinsAnalysis.prototype.run = function (matches) {
        //a variable to store number of wins
        var wins = 0;
        //run through the matches
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            //[ '29/10/2018', 'Tottenham', 'Man City', '0', '1', 'A', 'K Friend' ],
            //if the home team is Manchester United and wins as a home team
            if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
                //add to the wins variable
                wins++;
                //also if Man United wins as a guest team
            }
            else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
                //add to the wins variable
                wins++;
            }
        }
        return "Team " + this.team + " won " + wins + " games";
    };
    return WinsAnalysis;
}());
exports.WinsAnalysis = WinsAnalysis;
