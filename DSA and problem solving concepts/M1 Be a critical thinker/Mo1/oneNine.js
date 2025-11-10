const setPrev = new Set()

setPrev.add("apple")
setPrev.add("banana")
setPrev.add("orange")
setPrev.add("apple")

console.log(setPrev);

// remove dubplicate from array using set

const arr = ["apple", "banana", "orange", "banana", "grape"]

const setNew = new Set(arr) // stored unique values only

setNew.add("kiwi")

// convert to array usinsg array.from

const test = Array.from(setNew)

// set has method
console.log(setNew.has("banana")); // true
console.log(setNew.has("mango")); // false

console.log(setNew);

// set delete method
setNew.delete("orange")


console.log(setNew);
console.log(test);