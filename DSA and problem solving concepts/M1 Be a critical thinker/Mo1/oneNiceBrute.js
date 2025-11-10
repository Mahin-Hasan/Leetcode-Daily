const arr = ["apple", "banana", "orange", "banana", "grape", "apple"]

//brute force method to remove duplicates
const removeDuplicates = (array) => {

    const newArr = []

    array.forEach(item => {
        if (!newArr.includes(item)) {
            newArr.push(item)
        }
    })

    return newArr
}

console.log(removeDuplicates(arr));

//using set to remove duplicates

const removeDupSet = (arr) => {

    const set = new Set(arr)

    return Array.from(set)
}

console.log(removeDupSet(arr));