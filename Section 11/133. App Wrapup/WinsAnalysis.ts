import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult';
import { Analyzer } from '../Summary';

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  //run the win check
  run(matches: MatchData[]): string {
    //a variable to store number of wins
    let wins = 0;

    //run through the matches
    for (let match of matches) {
      //[ '29/10/2018', 'Tottenham', 'Man City', '0', '1', 'A', 'K Friend' ],
      //if the home team is Manchester United and wins as a home team
      if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        //add to the wins variable
        wins++;

        //also if Man United wins as a guest team
      } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        //add to the wins variable
        wins++;
      }
    }
    return `Team ${this.team} won ${wins} games`;
  }
}
