import fs from 'fs';

//abstract class where the data can be of type anything
export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(public filename: string) {}

  abstract mapRow(row: string[]): T;

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
