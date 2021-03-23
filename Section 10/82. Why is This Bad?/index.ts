class Sorter {
  constructor(public collection: number[] | string | LinkedList){}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j <length -i -1; j++) {
        if(this.collection instanceof LinkedList) {
          //
        }

        // all of this only works if collection is number[]
        // If collection is an array of numbers
        if(this.collection instanceof Array) {
          // collection === number[]
          if (this.collection[j] > this.collection[j+1]) {
            const leftHand = this.collection[j];
            this.collection[j] = this.collection[j+1];
            this.collection[j+1] = leftHand;
          }
        }

        //only going to work if collection is a string
        //if collection is a string, do this logic instead:
        // ~~logic to compare and swap characters in a string
        if(typeof this.collection == 'string') {
          this.collection.
        }
      }
    }
  }
}

const sorter = new Sorter ([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);