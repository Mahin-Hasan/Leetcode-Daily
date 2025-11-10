//* Grouping and Aggregating Data from an Array of Objects

// scenerio: Count every survey and group by response

//? input 

const surveyResponses = [
    "A",
    "B",
    "A",
    "C",
    "B",
    "A",
    "D",
    "C",
    "B",
    "A",
    "D",
    "B",
    "C",
    "A",
    "B"
];

const count = surveyResponses.reduce((table, response) => {
    // if (table[response]) {
    //     table[response] = table[response] + 1;
    // } else {
    //     table[response] = 1;
    // }
    table[response] = (table[response] || 0) + 1;
    return table;
}, {})

console.log(count);
//? Output => { A: 5, B: 5, C: 3, D: 2 }

// Scenerio: you have a flat array of sales data and you want to group the total sales by product category.
// calculating the toal revenue and the number of intems sold for each category.

const sales = [
    { category: "Electronics", item: "laptop", price: 999.99, quantity: 2 },
    { category: "Electronics", item: "smartphone", price: 699.99, quantity: 5 },
    { category: "Home Appliances", item: "blender", price: 49.99, quantity: 10 },
    { category: "Home Appliances", item: "microwave", price: 89.99, quantity: 4 },
    { category: "Furniture", item: "desk", price: 199.99, quantity: 3 },
    { category: "Furniture", item: "chair", price: 89.99, quantity: 6 },
]
