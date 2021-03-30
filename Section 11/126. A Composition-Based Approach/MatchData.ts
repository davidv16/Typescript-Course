import { MatchResult } from './MatchResult';

//define a tuple of the return data
//[ '29/10/2018', 'Tottenham', 'Man City', '0', '1', 'A', 'K Friend' ],
export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];
