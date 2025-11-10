const sales = [
    { category: "Electronics", item: "laptop", price: 999.99, quantity: 2 },
    { category: "Electronics", item: "smartphone", price: 699.99, quantity: 5 },
    { category: "Home", item: "blender", price: 49.99, quantity: 10 },
    { category: "Home", item: "microwave", price: 89.99, quantity: 4 },
    { category: "Furniture", item: "desk", price: 199.99, quantity: 3 },
    { category: "Furniture", item: "chair", price: 89.99, quantity: 6 },
]

// Grouping and aggregating sales data by category

// scenario: you have a flat array of sales data and you want to group the total sales by product category.
// calculating the total revenue and the number of items sold for each category.

//? Output =>
// {
//   Electronics: { totalRevenue: 5499.93, itemCount: 7 },
//   Home: { totalRevenue: 859.86, itemCount: 14 },
//   Furniture: { totalRevenue: 1139.9099999999999, itemCount: 9 }
// }

const totalSalesbyCategory = sales.reduce((table, sale) => {
    const { category, price, quantity } = sale;

    if (!table[category]) {
        table[category] = {
            totalRevenue: 0,
            itemCount: 0
        }
    }
    table[category].totalRevenue += price * quantity;
    table[category].itemCount += quantity;

    return table;
}, {});

console.log(totalSalesbyCategory);

