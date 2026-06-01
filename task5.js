
// 1. Spread Operator

let frontEnd = ["HTML", "CSS"];
let backEnd = ["Sql", "Sql Server"];

let fullStack = [...frontEnd, ...backEnd];

console.log(fullStack); // Output: ["HTML", "CSS", "Sql", "Sql Server"]

// 2. Copy Array

let original = [1, 2, 3];

let copied = [...original];

copied.push(4);

console.log("Original:", original);
console.log("Copied:", copied);  // Output: Original: [1, 2, 3], Copied: [1, 2, 3, 4]

// 3. Object Merge

let student1 = {
  name: "Ajith"
};

let student2 = {
  role: "Developer"
};

let student = {
  ...student1,
  ...student2
};

console.log(student); // Output: { name: "Ajith", role: "Developer" }

// 4. Rest Operator

function total(a, b, ...rest) {
  console.log("a =", a);
  console.log("b =", b);
  console.log("Remaining Values =", rest);
  console.log("Total Remaining Count =", rest.length);
}

total(1, 2, 3, 4, 5, 6, 7, 8);

// 5. Array Destructuring

let colors = ["pink", "green", "red", "yellow"];

let [c1, c2, c3, c4] = colors;

console.log(c3); // Output: "red"  

// 6. Nested Array Destructuring

let data = [1, [2, [3, [4]]]];

let [a, [b, [c, [d]]]] = data;

console.log(a, b, c, d); // Output: 1 2 3 4

// 7. Object Destructuring

let mobile = {
  brand: "Iphone",
  price: 50000,
  color: "black"
};

let { brand, price, color } = mobile;

console.log(brand, color); // Output: "Iphone", "black"    

// 8. push() & pop()

let numbers = [1, 2, 3];

numbers.push(4, 5, 6);

numbers.pop();

console.log(numbers); // Output: [1, 2, 3, 4, 5]

// 9. shift() & unshift()

let fruits = ["apple", "orange"];

fruits.unshift("graps");

fruits.shift();

console.log(fruits); // ["apple", "orange"]

// 10.splice()

let arr = [1, 2, 30, 40, 5, 6];

arr.splice(2, 2, 3, 4);

console.log(arr); // Output: [1, 2, 3, 4, 5, 6]

// 11. concat()

let a = [1, 2];
let b = [3, 4];

let result = a.concat(b, [5, 6]);

console.log(result); // Output: [1, 2, 3, 4, 5, 6]

// 12. slice()

let marks = [10, 20, 30, 40, 50, 60];

let extracted = marks.slice(2, 5);

console.log(extracted); // Output: [30, 40, 50]

// 13. flat()

let nest = [1, [2, [3, [4, [5]]]]];

let flatArray = nest.flat(Infinity);

console.log(flatArray); // Output: [1, 2, 3, 4, 5]

// 14. fill()

let arr = [1, 2, 3, 4, 5];

arr.fill("done", 3);

console.log(arr); // Output: [1, 2, 3, "done", "done"]  

// 15. includes()

let values = [10, 20, 30, 40];

console.log(values.includes(20));
console.log(values.includes(100)); // Output: true, false

// 16. indexOf()

let arr = [1, 2, 3, 4, 3, 2];

console.log(arr.indexOf(3));
console.log(arr.indexOf(2)); // Output: 2, 1

// 17. lastIndexOf()

let arr = [1, 2, 3, 4, 3, 2];

console.log(arr.lastIndexOf(3));
console.log(arr.lastIndexOf(2)); // Output: 4, 5

// 18. sort()

nums.sort((a, b) => a - b);

console.log(nums); // [1,2,9,55,100]

// 19. reverse()

let letters = ["a", "b", "c", "d"];

letters.reverse();

console.log(letters); // Output: ["d", "c", "b", "a"]   

// 20. Student Management

let students = ["Ajith", "Sai", "Kumar"];

students.push("Sri");

students.splice(1, 1);

students.splice(1, 1, "Zara");

students.reverse();

console.log(students); // Output: ["Sri", "Zara", "Ajith"]   

// 21. Shopping Cart

let cart = ["Shoes", "Watch", "Phone"];

cart.push("Laptop");

cart.splice(1, 1);

console.log(cart.includes("Phone"));

console.log("Total Items:", cart.length);

console.log(cart);  //  true   Total Items: 3  ["Shoes","Phone","Laptop"]

// 22. Employee Database

let employee = {
  name: "Ajith",
  role: "Softwear Developer",
  salary: "5LPA"
};

let { name, role, salary } = employee;

console.log(name, role, salary);

let copiedEmployee = {
  ...employee
};

copiedEmployee.salary = "8LPA";

console.log("Original:", employee);
console.log("Copied:", copiedEmployee); // Output: Original: { name: "Ajith", role: "Softwear Developer", salary: "5LPA" }, 
                                       // Copied: { name: "Ajith", role: "Softwear Developer", salary: "8LPA" }   


// 23. Custom Function

function company(name, ...skills) {
  console.log("Employee Name:", name);
  console.log("Skills:", skills);
  console.log("Total Skills:", skills.length);
}

company("Ajith", "HTML", "CSS", "JS", "React");

// 24. Array Analyzer

let data = [1,2,3,4,5,6,7,8,9,10];

let firstFive = data.slice(0, 5);

console.log(firstFive);

data.reverse();

console.log(data);

console.log(data.includes(7));

console.log(data.indexOf(10)); 

// 25. Complete Challenge

let users = [
  { name: "Ajith", role: "Developer" },
  { name: "Sai", role: "Designer" },
  { name: "Sri", role: "Tester" }
];

users.push({ name: "Karupu", role: "Manager" });

users.pop();

let newUsers = [
  { name: "Ram", role: "HR" },
  { name: "Lokesh", role: "Support" }
];

let finalUsers = [...users, ...newUsers];

for (let user of finalUsers) {
  console.log(user.name);
}

finalUsers.reverse();

console.log(finalUsers); 