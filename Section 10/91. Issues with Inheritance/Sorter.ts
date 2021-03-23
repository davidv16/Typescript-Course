interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
  //a function to sort the values in the data collection
  sort(): void {
    //get the length of the collection
    const { length } = this;

    //run through the length of the collection in a step of 1 to check each item.
    for (let i = 0; i < length; i++) {
      //check the next number aside it.
      for (let j = 0; j < length - i - 1; j++) {
        //compare the number and the next number
        //if the left number is larger than the right number
        if (this.compare(j, j + 1)) {
          //then swap the numbers
          this.swap(j, j + 1);
        }
      }
    }
  }
}
