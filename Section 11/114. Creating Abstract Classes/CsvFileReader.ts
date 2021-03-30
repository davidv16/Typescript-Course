import fs from 'fs';
import { MatchResult } from './MatchResult';

//define a tuple of the return data
//[ '29/10/2018', 'Tottenham', 'Man City', '0', '1', 'A', 'K Friend' ],
type MatchData = [Date, string, string, number, number, MatchResult, string];

export abstract class CsvFileReader {
  data: MatchData[] = [];

  constructor(public filename: string) {}

  abstract mapRow(row: string[]): MatchData;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      //split on new line
      .split('\n')
      //change each row of string to an array of strings
      .map((row: string): string[] => {
        //split the row by comma and map the items into an sub array.
        return row.split(',');
      })
      //change each string item in the row to appropriate type.
      //if need be.
      //[ '29/10/2018', 'Tottenham', 'Man City', '0', '1', 'A', 'K Friend' ],
      .map(this.mapRow);
  }
}
