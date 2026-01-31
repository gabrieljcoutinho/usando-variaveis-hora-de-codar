const arr = [1, 2, 3, 4, 5];

const highNumbers = arr.filter((n) => {
   if(n >= 3){
        return n;
   }
});

console.log(highNumbers);

const users = [
    { name: 'John', available:  true},
    { name: 'Jane', available: false},
    { name: 'Jim', available: true },
    { name: 'Jack', available:  false},
]

const availableUsers = users.filter((user) => user.available)
const notAvailableUsers = users.filter((user) => !user.available)

console.log(availableUsers)
// [{ name: 'John', available:  true}, { name: 'Jim', available: true }]

console.log(notAvailableUsers)
// [{ name: 'Jane', available: false}, { name: 'Jack', available:  false}]

