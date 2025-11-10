// sort

const numbers = [5, 3, 8, 1, 4];
const fruits = ["Banana", "apple", "orange", "mango", "grape"];


fruits.sort((a, b) => a.localeCompare(b)); // ascending order

console.log(fruits);

// nested array flat

const arr = [1, 2, [3, 4], [5, 6, [7, 8]]]
const flattenedArr = arr.flat(2); // depth level 2
const flattenedArrInfinity = arr.flat(Infinity); // depth level 2
console.log(flattenedArrInfinity);

const tagsFromPosts = [
    ['javascript', 'react','css'],
    ['nodejs', 'express', 'mongodb'],
    ['html', 'css', 'react']
]
const filterTags  = new Set(tagsFromPosts.flat());
console.log(filterTags);
const filterTagsArr  = [...new Set(tagsFromPosts.flat())]
console.log(filterTagsArr);
