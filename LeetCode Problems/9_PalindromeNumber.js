function isPalindrome(x) {
    const str = x.toString();
    return str === str.split('').reverse().join('');
}


const output1=isPalindrome(121)
const output2=isPalindrome(10)

console.log(output1);
console.log(output2);