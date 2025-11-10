
/*
const startTime = performance.now();

for(let i = 0; i <=50000; i++) {
    console.log(i);
}
const endTime = performance.now();

console.log(`Execution time: ${endTime - startTime} milliseconds`);
*/

const firstArr = []
const secondArr = []



for (let i = 0; i <= 60000; i++) {
    if (i <= 30000) {
        firstArr.push(i);
    }
    secondArr.push(i);
}
console.log("first", firstArr.length);
console.log("2nd", secondArr.length);


console.time('map1')

const firstUserList = firstArr.map((num) => ({ userId: num }))
console.timeEnd('map1')
console.time('map2')
const secondUserList = secondArr.map((num) => ({ userId: num }))
console.timeEnd('map2')

