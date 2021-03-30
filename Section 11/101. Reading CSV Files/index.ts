import fs from 'fs';

const matches = fs
  .readFileSync('football.csv', {
    encoding: 'utf-8',
  })
  //split on new line
  .split('\n')
  //change each row of string to an array of strings
  .map((row: string): string[] => {
    //split the row by comma and map the items into an sub array.
    return row.split(',');
  });

console.log(matches);
