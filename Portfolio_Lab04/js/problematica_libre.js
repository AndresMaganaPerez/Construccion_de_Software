class BubbleSort {

  constructor() {
    this.arr = [];
  }

  add_arr() {
    let n = document.getElementById("num").value;
    this.arr.push(n);
    document.getElementById("unsort_arr").innerHTML = `Unsorted array: ${this.arr}`;
  }

  sort_arr(){
    let l = this.arr.length;
    for (let i = 0; i < l-1; i++)
      for (let j = 0; j < l-i-1; j++)
        if (this.arr[j] > this.arr[j+1]) {
          // swap
          let temp = this.arr[j];
          this.arr[j] = this.arr[j+1];
          this.arr[j+1] = temp;
        }
    console.log(this.arr);
    document.getElementById("sort_arr").innerHTML = `Sorted Array: ${this.arr}`;
  }

}

const sort = new BubbleSort();

// Ref Algoritmo Bubble Sort: https://www.geeksforgeeks.org/bubble-sort/
