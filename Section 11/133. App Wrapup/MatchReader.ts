import { MatchData } from './MatchData';
import { CsvFileReader } from './CsvFileReader';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

//whoever wants to call the class below must own these two functions.
interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  //static function fromCsv.
  //takes in the filename and
  //returns an instance of MatchReader with an instance of CsvFileReader passed down to it.
  static fromCsv(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename));
  }

  //variable 'matches' to store the matches in a MatchData tuple
  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  //function to get the data that was retrieved from the csv file
  //and then convert the strings in each row to their rightful variables
  load(): void {
    this.reader.read();
    //change each string item in the row to appropriate type.
    //if need be.
    //[ '29/10/2018', 'Tottenham', 'Man City', '0', '1', 'A', 'K Friend' ],
    this.matches = this.reader.data.map(
      (row: string[]): MatchData => {
        return [
          //switch the first string to a date format
          dateStringToDate(row[0]),
          //don't change row 2 and 3
          row[1],
          row[2],
          //change row 4 and 5 to numbers
          parseInt(row[3]),
          parseInt(row[4]),
          //change row 6 to a type of the enums we created
          row[5] as MatchResult,
          row[6],
        ];
      }
    );
  }
}
