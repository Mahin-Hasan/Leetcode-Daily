const cartItems = [
    { id: 1, name: "Wireless Mouse", price: 25.99, quantity: 2 },
    { id: 2, name: "Bluetooth Headphones", price: 59.99, quantity: 1 },
    { id: 3, name: "Mechanical Keyboard", price: 89.99, quantity: 1 },
    { id: 4, name: "USB-C Cable", price: 9.99, quantity: 3 },
    { id: 5, name: "Laptop Stand", price: 39.99, quantity: 1 }
];


const subTotals = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
}, 0);

console.log(subTotals);

const players = [
    { name: "Mahran", score: 92 },
    { name: "Nayeem", score: 88 },
    { name: "Arif", score: 76 },
    { name: "Mahir", score: 95 },
    { name: "Muiz", score: 81 }
];

const bestPlayer = players.reduce((bestPlayer, player) => {
    console.log(bestPlayer, player);
    if (bestPlayer.score > player.score) {
        return bestPlayer;

    }
    return player;;

}, players[0]);

console.log(bestPlayer);    