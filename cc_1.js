// Task 1: Variables and Data Types

let employeeName = "Trump"
const employeeID = 1;
var isActive = true;

console. log(employeeName, typeof(employeeName));
console. log(employeeID, typeof(employeeID));
console. log(isActive, typeof(isActive));



// Task 2: Compound Data Types

 let products = ["apple","orange","water"] ;
 const productDetails = {
    name: products,
    price: 10.00,
    inStock: true
 }

 console.log(products, productDetails);



 //Task 3: Assignment Operators
  let accountBalance = 100;
  console. log("Initial Balance;", accountBalance)
  
accountBalance +=100;
console. log("updated Balance", accountBalance);

accountBalance -= 100;
console. log("updated Balance", accountBalance);

accountBalance *= 2;
console. log("updated Balance", accountBalance);

accountBalance /= 2;
console. log("updated Balance", accountBalance);



//Task 4: Comparison Operators
let employeeScore1 = 100
let employeeScore2 = 200

console. log(employeeScore1 > employeeScore2);
console. log(employeeScore1 < employeeScore2);
console. log(employeeScore1 >= employeeScore2);
console. log(employeeScore1 <= employeeScore2);
console. log(employeeScore1 === employeeScore2);
console. log(employeeScore1 !== employeeScore2);



//Task 5:  Logical Operators
 let hasKeyCard = true;
 let hasPermission = false;

console. log(hasKeyCard && hasPermission);
console. log(hasKeyCard || hasPermission);
console. log(!hasPermission);