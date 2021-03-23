interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}
//abstract class that uses functions that haven't been implemented yet
//it cannot however be created as an object
export abstract class Sorter {
  //promise that a child class will implement these classes
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

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
