import fs from 'fs';

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
      });
  }
}
