// const person = {
//   name: "Alex",
//   age: 31,
//   location: {
//     city: "Nha trang",
//     temp: 92,
//   },
// };

// const { name: firstName = "Anonym", age } = person;
// // const name = person.name;
// // const age = person.age;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`its ${temperature} in ${city}`);
// }

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin",
//   },
// };

// const { name: publisherName = "Self - Published" } = book.publisher;

// console.log(`${publisherName}`);

const address = ["20 Pobedy", "Dyatlovo", "Hrodnenskaya obl", "230006"];

const [, city, state] = address;

console.log(`you are in ${city}  ${state}.`);

const item = ["Coffee (hot)", "$2.00", "2,50", "2.75"];
const [coffee, , medium] = item;

console.log(`A medium ${coffee} costs ${medium}`);
