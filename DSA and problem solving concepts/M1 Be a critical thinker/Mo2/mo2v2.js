const rawApiData = [
    {
        id: 1, productName: "Wireless Headphones",
        category: "Electronics",
        price: 89.99,
        rating: 4.5,
        stock: 120
    },
    { id: 2, productName: "Mechanical Keyboard", category: "Computers", price: 129.99, rating: 4.7, stock: 75 },
    { id: 3, productName: "Smart Watch", category: "Wearables", price: 199.99, rating: 4.2, stock: 60 },
    { id: 4, productName: "Running Shoes", category: "Sports", price: 59.99, rating: 4.4, stock: 200 },
    { id: 5, productName: "Bluetooth Speaker", category: "Audio", price: 49.99, rating: 4.3, stock: 150 },
    { id: 6, productName: "Gaming Mouse", category: "Computers", price: 59.99, rating: 4.6, stock: 90 },
    { id: 7, productName: "LED Monitor 27-inch", category: "Electronics", price: 249.99, rating: 4.8, stock: 45 },
    { id: 8, productName: "Portable Charger", category: "Accessories", price: 39.99, rating: 4.1, stock: 130 },
    { id: 9, productName: "Smartphone Tripod", category: "Photography", price: 29.99, rating: 4.0, stock: 85 },
    { id: 10, productName: "Noise Cancelling Earbuds", category: "Audio", price: 99.99, rating: 4.5, stock: 110 },
    { id: 11, productName: "4K Action Camera", category: "Photography", price: 179.99, rating: 4.4, stock: 70 },
    { id: 12, productName: "USB-C Hub 6-in-1", category: "Computers", price: 54.99, rating: 4.6, stock: 140 },
    { id: 13, productName: "Fitness Tracker", category: "Wearables", price: 79.99, rating: 4.3, stock: 160 },
    { id: 14, productName: "Laptop Stand", category: "Accessories", price: 34.99, rating: 4.7, stock: 190 },
    { id: 15, productName: "Gaming Chair", category: "Furniture", price: 249.99, rating: 4.8, stock: 55 },
    { id: 16, productName: "Desk Lamp with USB", category: "Home", price: 24.99, rating: 4.2, stock: 210 },
    { id: 17, productName: "External SSD 1TB", category: "Computers", price: 149.99, rating: 4.9, stock: 35 },
    { id: 18, productName: "Drone with 4K Camera", category: "Electronics", price: 499.99, rating: 4.6, stock: 25 },
    { id: 19, productName: "Electric Toothbrush", category: "Health", price: 59.99, rating: 4.4, stock: 80 },
    { id: 20, productName: "Wireless Charging Pad", category: "Accessories", price: 29.99, rating: 4.3, stock: 175 }
];


//? Output => [{name:"Product Name", name: "smart watch"]

//* process
//TODO  filter => electronics
//TODO  Sort by => rating
//TODO slice => top | first three
//TODO  map => transform object shae to {name: "Name"}



const topElectronicProduct = rawApiData.filter(
    (item) => item.category === "Electronics"
).sort((a, b) => b.rating - a.rating)
.slice(0, 3)
.map((item) => ({ name: item.productName })); //! note for map if multiple line use return otherwise use ()

console.log(topElectronicProduct);

