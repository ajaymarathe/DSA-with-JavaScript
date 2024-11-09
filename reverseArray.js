function reverseArray(arr){
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while( leftIndex < rightIndex ) {
    [arr[leftIndex], arr[rightIndex]] = [arr[rightIndex], arr[leftIndex]];
    leftIndex++;
    rightIndex--;
  }
  return arr;
}

console.log('reverseArr:', reverseArray([0,1,2,3,4,5]))