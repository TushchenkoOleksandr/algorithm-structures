const array = [1, 3, 2, 6, 1, 7, 9, 3, 45, 2, 57, 12, 43];

let count = 0;
const linearSearch = (arr, item) => {
    for (let i = 0; i < arr.length; i++) {
        count +=1
        if(arr[i] === item) {
            return i;
        }
    }
  return null;
};

console.log(linearSearch(array, 7))
console.log(count)
