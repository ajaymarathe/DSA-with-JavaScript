// "use strict";

// x = 10;
// console.log('x', x)

// function selectionSort(arr) {
//   let n = arr.length;

//   // Outer loop to go through each element one by one
//   for (let i = 0; i < n - 1; i++) {
//       let minIndex = i; // Assume the current position has the smallest element

//       // Inner loop to find the smallest element in the remaining array
//       for (let j = i + 1; j < n; j++) {
//           if (arr[j] < arr[minIndex]) {
//               minIndex = j; // Update minIndex if a smaller element is found
//           }
//       }

//       // Swap the smallest element found with the element at position i
//       let temp = arr[i];
//       arr[i] = arr[minIndex];
//       arr[minIndex] = temp;
//   }

//   return arr;
// }

// // Example:
// let toys = [5, 3, 8, 4, 2];
// console.log(selectionSort(toys)); // Output: [2, 3, 4, 5, 8]

// Lets understand closure

// function counterApp() {
//   let count = 0;

//   return {
//     increment() {
//       count++;
//       return count;
//     },
//     decrement() {
//       count--;
//       return count;
//     }
//   }
// }

// const counter = new counterApp()


// console.log('counter.increament()', counter.increment())
// console.log('counter.increament()', counter.increment())
// console.log('counter.increament()', counter.increment())
// console.log('counter.increament()', counter.increment())
// console.log('counter.increament()', counter.decrement())

// encapsulation - is concept where internal details of class or object are hidden from the outside world, and we will understand this by creating class.

class Car {
  constructor(brand){
    this.brand = brand
  }

  getBrand(){
    return this.brand;
  }

  setBrand(newBrand){
    this.brand = newBrand
    return this.getBrand();
  }
}

const myCar = new Car("Toyato");

console.log('myCar.getBrand()', myCar.getBrand())
console.log('myCar.setBrand()', myCar.setBrand("Lambro"))
