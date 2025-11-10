const numbers = [5, 12, 8, 130, 44];

const hasOddNumber = numbers.some((num) => num % 2 !== 0);

console.log("Array has at least one odd number:", hasOddNumber); // true    

const currentUserRoles = ['user', 'editor', 'admin'];
const featureAccessRoles = ['admin', 'superadmin'];

const canAccess = currentUserRoles.some(
    (role) => featureAccessRoles.includes(role)
);

console.log(canAccess);

const arr = Array.from([1, 2, 3], (value, i) => value * value);
console.log(arr);


const range = (start, stop, step) =>
    Array.from(
        { length: Math.ceil((stop - start) / step) },
        (_, i) => start + (i * step)
    );

console.log(range(0, 11, 2));