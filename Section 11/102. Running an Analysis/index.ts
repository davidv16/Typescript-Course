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

let manUnitedWins = 0;

for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === 'H') {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === 'A') {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
