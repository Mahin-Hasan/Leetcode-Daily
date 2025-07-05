
var findLucky = function(numbers) {
     const numberFrequency = {};

    // Count how often each number appears in the array
    for (const number of numbers) {
        numberFrequency[number] = (numberFrequency[number] || 0) + 1;
    }

    let largestLuckyInteger = -1;

    // Check for lucky integers: value == frequency
    for (const value in numberFrequency) {
        const frequency = numberFrequency[value];
        const numericValue = parseInt(value);

        if (numericValue === frequency) {
            largestLuckyInteger = Math.max(largestLuckyInteger, numericValue);
        }
    }

    return largestLuckyInteger;
};

console.log(findLucky([2, 2, 3, 4]));         
console.log(findLucky([1, 2, 2, 3, 3, 3]));   
console.log(findLucky([2, 2, 2, 3, 3]));      
