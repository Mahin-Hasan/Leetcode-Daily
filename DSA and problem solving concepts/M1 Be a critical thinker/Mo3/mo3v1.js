//* stateless vs stateful 

//stateless example

const statelessCsounter = (amount)=>{
    let count = 0
    count = count + amount
    return count    
}

console.log(statelessCsounter(3));
console.log(statelessCsounter(2));

//stateful example
const counter = {
    count: 0,
    add(amount) {
        this.count = this.count + amount
    },
    print() {
        console.log(this.count);
    }
}

counter.add(5)
counter.print() // 5