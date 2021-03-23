export class CharactersCollection {
  //define a public property named data of the type string
  //pass it down to the constructor
  constructor(public data: string) {}

  //return the length of the data collection
  get length(): number {
    return this.data.length;
  }

  //compare ascii numeric value of every two characters in the collection
  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      //put both left and right character to lower case and check if the left is higher than the right
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    //split the characters from the string up to an array
    const characters = this.data.split('');

    //store the first character value in a temp variable
    const leftHand = characters[leftIndex];
    //set the right character value to the left character value
    characters[leftIndex] = characters[rightIndex];
    //set the temp variable to the right character value
    characters[rightIndex] = leftHand;

    //join the characters again to a string.
    this.data = characters.join('');
  }
}
