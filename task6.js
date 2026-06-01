
// 1. Employee Bonus Filter   

let employees = [
  {name:"Aji", salary:300000},
  {name:"Sri", salary:400000},
  {name:"Sai", salary:500000}
];

employees
  .filter(emp => emp.salary > 300000)
  .map(emp => console.log("Congrats " + emp.name)); // Output: Congrats Sri, Congrats Sai

// 2. Shopping Cart Total

let cart = [1200, 3400, 500, 999];

let total = cart.reduce((sum, item) => sum + item, 0);

console.log(total); // Output: 6099

// 3. Login Username Formatter

let user = "naveen";

let result =
  user.slice(0,1).toUpperCase() + user.slice(1);

console.log(result); // Output: Naveen

// 4. OTP Checker

let otp = "560890";

if (otp.includes("0")) {
  console.log("Valid OTP");
} else {
  console.log("Invalid OTP");
}  // Output: Valid OTP

// 5. Food Delivery App

let orders = ["pizza","burger"];

orders.push("shawarma");

orders.pop();

console.log(orders); // Output: ["pizza","burger"]

// 6. Attendance Checker

let marks = [40,50,70,80];

let result = marks.every(mark => mark >= 35);

console.log(result); // Output: true

// 7. Find VIP Customer

let customer = [
  {name:"Aji", purchase:5000},
  {name:"Sai", purchase:15000},
  {name:"Sri", purchase:25000}
];

let vip = customer.find(c => c.purchase > 10000);

console.log(vip.name); // Output: Sai

// 8. Reverse Chat Message

let msg = "hello";

let reversed = msg.split("").reverse().join("");

console.log(reversed); // Output: "olleh"

// 9. Remove Duplicate Product

let products = ["tv","laptop","mobile","watch"];

console.log(products.indexOf("mobile")); // Output: 2

// 10. Student Rank Sort

let marks = [99,45,12,67,89];

marks.sort((a,b) => a - b);

console.log(marks); // Output: [12, 45, 67, 89, 99]

// 11. Movie Search

let movies = ["Karupu","RRR","Vikram"];

let exists = movies.some(movie => movie === "RRR");

console.log(exists); // Output: true

// 12. Hide Mobile Number

let num = "7010490031";

console.log(num.slice(-4)); // Output: "0031"

// 13. Online Exam Result

let mark = 78;

let result = mark >= 35 ? "Pass" : "Fail";

console.log(result); // Output: "Pass"

// 14. Cab Booking Price

function totalFare(baseFare, extraKm) {
  return baseFare + extraKm;
}

console.log(totalFare(100, 50)); // Output: 150

// 15. Instagram Hashtag Generator

let tag = "Softwear developer";

let result = tag.replaceAll(" ", "_");

console.log(result); // Output: "Softwear_developer"

// 16. Netflix Kids Content

let movies = [
  {name:"A", age:13},
  {name:"B", age:18},
  {name:"C", age:10}
];

let kidsMovies = movies.filter(movie => movie.age < 18);

kidsMovies.forEach(movie => console.log(movie.name)); // Output: A, C

// 17. E-commerce Product Search

let product = "iphone";

console.log(product.startsWith("i")); // Output: true

// 18. WhatsApp Group Names

let groups = ["office","friends","family"];

groups.forEach((group,index) => {
  console.log(index + 1, group);
}); // Output: 1 office, 2 friends, 3 family

// 19. Salary Highest Finder

let salary = [20000,50000,70000,10000];

let highest = salary.reduce((max, value) => {
  return value > max ? value : max;
});

console.log(highest); // Output: 70000  

// 20. Password Security Checker

let password = "navi@123";

if (password.includes("@") && password.length >= 8) {
  console.log("Strong Password");
} else {
  console.log("Weak Password");
} // Output: Strong Password