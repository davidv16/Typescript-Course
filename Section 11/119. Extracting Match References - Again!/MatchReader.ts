import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

//define a tuple of the return data
//[ '29/10/2018', 'Tottenham', 'Man City', '0', '1', 'A', 'K Friend' ],
type MatchData = [Date, string, string, number, number, MatchResult, string];

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  constructor(public reader: DataReader) {}

  //change each string item in the row to appropriate type.
  //if need be.
  //[ '29/10/2018', 'Tottenham', 'Man City', '0', '1', 'A', 'K Friend' ],
  //      .map(
  //        (row: string[]): MatchData => {
  //          return [
  //            //switch the first string to a date format
  //            dateStringToDate(row[0]),
  //            //don't change row 2 and 3
  //            row[1],
  //            row[2],
  //            //change row 4 and 5 to numbers
  //            parseInt(row[3]),
  //            parseInt(row[4]),
  //            //change row 6 to a type of the enums we created
  //            row[5] as MatchResult,
  //            row[6],
  //          ];
  //        }
  //      );
}
