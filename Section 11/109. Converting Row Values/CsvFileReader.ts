import fs from 'fs';
import { dateStringToDate } from './utils';

export class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}

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
      .map((row: string[]): any => {
        return [
          //switch the first string to a date format
          dateStringToDate(row[0]),
          //don't change row 2 and 3
          row[1],
          row[2],
          //change ro2 4 and 5 to numbers
          parseInt(row[3]),
          parseInt(row[4]),
        ];
      });
  }
}
