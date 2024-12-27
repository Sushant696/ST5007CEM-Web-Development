const object = {
  id: "hello",
  name: "name",
  subject: "webdev"
}

Object.assign(object, { new: "new id" });

let num1 = [1, 2, 3, 4];
let num2 = [4, 3, 2, 1];
let concatArr = num1.concat(num2)

let strNames = num1.join("and");
console.log(strNames)

// splice an array 

let arr = ["john", "janny", "alkjd", "ram"];
let spliced = arr.splice(1, arr.length);
console.log(spliced)


// slice 
let nums = [1, 2, 3, 4];
let num3 = [4, 3, 2, 1];

console.log(nums.slice(2, nums))


const people = [
  { id: 1, name: "Alice", age: 25, city: "New York" },
  { id: 2, name: "Bob", age: 30, city: "Los Angeles" },
  { id: 3, name: "Charlie", age: 22, city: "Chicago" },
  { id: 4, name: "David", age: 28, city: "Houston" },
  { id: 5, name: "Eve", age: 35, city: "Phoenix" },
  { id: 6, name: "Frank", age: 29, city: "Philadelphia" },
  { id: 7, name: "Grace", age: 24, city: "San Antonio" },
  { id: 8, name: "Hannah", age: 27, city: "San Diego" },
  { id: 9, name: "Ian", age: 26, city: "Dallas" },
  { id: 10, name: "Jack", age: 31, city: "San Jose" },
];

console.log(" filtered")
const filteredPeople = people.filter((people) => { return people.age > 20 && people.age < 30 })

const reducedNames = people.reduce((acc, curr) => curr.name + acc, "");
console.log(reducedNames,"doubled names");


const doubleAge = people.map((curr) => {
  return { ...curr, age: curr.age * 2 }
});

console.log(doubleAge, "doubleAge");