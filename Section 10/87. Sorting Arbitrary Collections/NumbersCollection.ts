export class NumbersCollection {
  //define a public property named data of the type number array
  //pass it down to the constructor
  constructor(public data: number[]) {}

  //return the length of the data collection
  get length(): number {
    return this.data.length;
  }

  //compare numeric value every two numbers in the collection
  compare(leftIndex: number, rightIndex: number): boolean {
    //return true if left number is higher than right number
    return this.data[leftIndex] > this.data[rightIndex];
  }

  //swap the numbers if the left number is higher than right
  swap(leftIndex: number, rightIndex: number): void {
    //put the left number in a variable
    const leftHand = this.data[leftIndex];
    //set the right number to the left number
    this.data[leftIndex] = this.data[rightIndex];
    //set the left number variable to the right number.
    this.data[rightIndex] = leftHand;
  }
}
