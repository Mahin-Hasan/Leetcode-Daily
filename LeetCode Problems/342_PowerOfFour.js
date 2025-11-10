var isPowerOfFour = function(n) {
    //Check if n is a positive number
    if (n <= 0) {
        return false;
    }

    //Check if n is a power of 2
 
    let isPowerOfTwo = (n & (n - 1)) === 0;
    if (!isPowerOfTwo) {
        return false;
    }

    // Check if the only '1' bit is in the correct (even) position

    let isOneBitInEvenPosition = (n & 0x55555555) !== 0;

    return isOneBitInEvenPosition;
};



console.log(isPowerOfFour(16));
console.log(isPowerOfFour(5));  
console.log(isPowerOfFour(1));  
