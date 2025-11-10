//* generate a lookup table from an array of objects

//? Input 

const postsArray = [
    { id: 1, title: "Introduction to JavaScript", author: "Alice" },
    { id: 2, title: "Understanding Asynchronous Programming", author: "Bob" },
    { id: 3, title: "JavaScript Design Patterns", author: "Charlie" },
];

const lookupTable = postsArray.reduce((table,post)=>{
    table[post.id] = post;
    return table;
},{});
console.log(lookupTable);
