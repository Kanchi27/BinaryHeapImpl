// Max Binary Heap
// Binary heap -> Binary tree where parent is always greater than its child
// Used to get min or max values from a collection in constant time.
// used for Priority Queues
// Optimized for insertion and removal best & worst case scenario -> O(logn)
// Access : O(n)
class MaxBinaryHeap {
  constructor(){
   this.values = [55,39, 33, 18, 27,12];  // [12,39, 33, 18, 27]  // [39,12,33,18,27]  // [39,27.33.18.12] 
  }

  //                41
  //        39                33
  //    18      27      12          55
  //
  swap(a, b) {
    [this.values[a], this.values[b]] = [this.values[b], this.values[a]];
  }
   get size() {
    return this.values.length;
  }
  comparator(a,b) {
    return this.values[a]-this.values[b];
  }
  insert(value){ 
    this.values.push(value);
    this.bubbleUp(value);
    return this;
  }

  bubbleUp(value){
    let idx = this.values.length - 1;
     while(idx>0){
      const parentIdx = Math.floor((idx-1)/2); 
      const parentEle = this.values[parentIdx];
      if(value <= parentEle) break;
      this.values[parentIdx] = value;
      this.values[idx] = parentEle;
      idx = parentIdx;  
    }
  }

  
  extractMax(index=0){
   if (!this.size) return null;
   console.log(this.values)
    this.swap(index, this.size - 1); // swap with last
    const value = this.values.pop(); // remove element
    console.log(this.values)
    this.bubbleDown(index);
    return this;
  }

  bubbleDown(index = 0) {
    let curr = index; 
    const left = (i) => 2 * i + 1; 
    const right = (i) => 2 * i + 2; 
    const getTopChild = (i) => (right(i) < this.size
      && this.comparator(left(i), right(i)) > 0 ? right(i) : left(i));

    while (left(curr) < this.size && this.comparator(getTopChild(curr),curr ) > 0) {
      const next = getTopChild(curr);
      this.swap(curr, next);
      curr = next;
    }
  }

}


const maxBheap = new MaxBinaryHeap();
console.log(maxBheap.insert(55));
console.log(maxBheap.insert(1));
console.log(maxBheap.insert(100));
console.log(maxBheap.insert(29));
console.log(maxBheap.extractMax())







  //                         100
  //           80                           56
  //       45      16                  40        15
  // 55



    //                         100
    //             55                        41
    //     39            29                12      33
    // 1      18     27
