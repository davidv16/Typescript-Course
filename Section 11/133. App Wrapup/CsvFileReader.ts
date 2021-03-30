import fs from 'fs';

export class CsvFileReader {
  //variable 'data' to store an array of strings
  data: string[][] = [];

  constructor(public filename: string) {}

  //function to read from file
  read(): void {
    //read the file and pass in to the data array
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
