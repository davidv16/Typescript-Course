import { MatchData } from '../src/MatchData';
import { MatchResult } from '../src/MatchResult';
import { Analyzer } from '../src/Summary';

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;

    for (let match of matches) {
      if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        wins++;
      } else if (
        match[2] === 'Man United' &&
        match[5] === MatchResult.AwayWin
      ) {
        wins++;
      }
    }
    return `Team ${this.team} won ${wins} games`;
  }
}
