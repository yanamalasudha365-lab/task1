  
// 1. VAR QUESTIONS 
 

// 1. Create a var variable called name and initialize it with your name. Print it.
var name = "Sudha Yanamala";
console.log(name);

// 2. Create a var variable called age with value 25. Reassign it to 30 and print it.
var age = 25;
age = 30;
console.log(age);

// 3. Create a var variable called city, assign "Chennai", then reassign "Bangalore". Print the final value.
var city = "Chennai";
city = "Bangalore";
console.log(city);

// 4. Create a var variable called salary and initialize it with 25000. Redeclare it with 35000. Print the value.
var salary = 25000;
var salary = 35000;
console.log(salary);

// 5. Create a var variable, assign a value, reassign it, and redeclare it. Print the final value.
var country = "India";
country = "USA";
var country = "Canada";
console.log(country);

// 6. Create a var variable called department with "ECE" and redeclare it with "CSE".
var department = "ECE";
var department = "CSE";
console.log(department);

// 7. Create a var variable called mark with 50, reassign it to 75, and print it.
var mark = 50;
mark = 75;
console.log(mark);

// 8. Create a var variable called company and redeclare it with another company name.
var company = "TCS";
var company = "Wipro";
console.log(company);

// 9. Create a var variable without assigning a value, then initialize it later and print it.
var designation;
designation = "Software Engineer";
console.log(designation);

// 10. Create one var variable and change its value three times. Print the final value.
var project = "Project A";
project = "Project B";
project = "Project C";
console.log(project);

 
// 2. LET QUESTIONS  
 

// 1. Create a let variable called age and initialize it with your age. Print it.
let letAge = 21;
console.log(letAge);

// 2. Create a let variable called salary, initialize it with 30000, then reassign it to 40000.
let letSalary = 30000;
letSalary = 40000;
console.log(letSalary);

// 3. Create a let variable called name, assign your name, then change it to another name.
let letName = "Sai Sudha";
letName = "Saisudha Yanamala";
console.log(letName);

// 4. Create a let variable called department and change its value from "ECE" to "CSE".
let letDepartment = "ECE";
letDepartment = "CSE";
console.log(letDepartment);

// 5. Create a let variable called mark, initialize it with 60, then reassign it to 90.
let letMark = 60;
letMark = 90;
console.log(letMark);

// 6. Declare a let variable without initialization. Later assign a value and print it.
let letCity;
letCity = "Chennai";
console.log(letCity);

// 7. Try to redeclare the same let variable. Observe what happens.
let letCountry = "India";
// let letCountry = "USA"; // Uncaught SyntaxError: Identifier 'letCountry' has already been declared

// 8. Create a let variable called city and reassign it two times. Print the final value.
let letCity2 = "Chennai";
letCity2 = "Bangalore";
letCity2 = "Hyderabad";
console.log(letCity2);

// 9. Create three different let variables and print all three.
let letComp = "TCS";
let letDept = "ECE";
let letSal = 30000;
console.log(letComp, letDept, letSal);

// 10. Create a let variable, initialize it, reassign it, and try to redeclare it.
let letProj = "Project A";
letProj = "Project B";
// let letProj = "Project C"; // Uncaught SyntaxError: Identifier 'letProj' has already been declared


 
// 3. CONST QUESTIONS  
 

// 1. Create a const variable called age with value 25 and print it.
const constAge = 25;
console.log(constAge);

// 2. Create a const variable called salary with value 50000 and print it.
const constSalary = 50000;
console.log(constSalary);

// 3. Create a const variable called company with "Stackly" and print it.
const constCompany = "Stackly";
console.log(constCompany);

// 4. Try to reassign a const variable with another value. Observe the result.
const constAge2 = 25;
// constAge2 = 30; // Uncaught TypeError: Assignment to constant variable.

// 5. Try to redeclare a const variable. Observe the result.
const constSalary2 = 50000;
// const constSalary2 = 60000; // Uncaught SyntaxError: Identifier 'constSalary2' has already been declared

// 6. Create a const variable called college and initialize it with your college name.
const college = "Audisankara Institute of Technology";
console.log(college);

// 7. Create three const variables for name, age, and department. Print them.
const constName3 = "Yanamala";
const constAge3 = 21;
const constDept3 = "CSE";
console.log(constName3, constAge3, constDept3);

// 8. Write a program using one var, one let, and one const variable. Print all three.
var mixName = "Sree";
let mixAge = 21;
const mixDept = "CSE";
console.log(mixName, mixAge, mixDept);


 
// 4. PRINTING STATEMENTS  
 

// 1. Print your name using console.log().
console.log("Sudha");

// 2. Create a variable containing your age and print it using console.log().
let agePrint = 21;
console.log(agePrint);

// 3. Print the number 100 using console.log().
console.log(100);

// 4. Create three variables and print their values using console.log().
let val1 = "Sree";
let val2 = 2;
let val3 = "Value 3";
console.log(val1, val2, val3);

// 5. Create a variable called message with "Hello JavaScript" and print it.
let message = "Hello JavaScript";
console.log(message);

// 6. Create a variable, print its value, change its value, and print it again.
let value = 12;
console.log(value);
value = 15;
console.log(value);

// 7. Print your name, age, and qualification using three separate console.log() statements.
console.log("Sudha");
console.log(21);
console.log("Bachelor of Technology");


// 5. ALERT() 
 

// 1. Display "Welcome to JavaScript" using alert().
alert("Welcome to JavaScript");

// 2. Create a variable called userName and display it using alert().
let alertUserName = "Sudha";
alert(alertUserName);

// 3. Create a variable called userAge and display it using alert().
let alertUserAge = 21;
alert(alertUserAge);

// 4. Create a variable containing "Welcome Naveen" and show it in a popup.
let welcomePopup = "Welcome Naveen";
alert(welcomePopup);

// 5. Create a variable containing your qualification and display it using alert().
let qualification = "Bachelor of Technology";
alert(qualification);


 
// 6. PROMPT()  
 

// 1. Ask the user "What is your name?" using prompt() and print the answer in the console.
let Name = prompt("What is your name?");
console.log(Name);

// 2. Ask the user "How old are you?" using prompt() and display the answer using alert().
let Age = prompt("How old are you?");
alert(Age);

// 3. Ask the user for their qualification and print the answer in the console.
let Qual = prompt("What is your qualification?");
console.log(Qual);

// 4. Ask the user for their name and show the entered name in a popup.
let NAME = prompt("Enter your name:");
alert(NAME);

// 5. Ask the user for their age and print the entered age in the console.
let AGE = prompt("Enter your age:");
console.log(AGE);


 
// 7. CONFIRM() & DOCUMENT.WRITELN() 
 

// 1. Create a confirmation box asking "Do you know programming?".
let knowProgramming = confirm("Do you know programming?");
console.log("Programming knowledge:", knowProgramming);

// 2. Create a variable containing "Welcome to Batch 41" and display it using document.writeln().
let welcomeBatch = "Welcome to Batch 41";
document.writeln(welcomeBatch);

// 3. Ask the user "Do you want to continue?" using confirm().
let wantToContinue = confirm("Do you want to continue?");
console.log("Continue choice:", wantToContinue);


 
// 8. CONSOLE METHODS  
 

// 1. Write one program that uses console.log(), console.warn(), and console.error() to display three different messages.
console.log("This is an informational log message.");
console.warn("This is a warning message.");
console.error("This is an error message.");

// 2. Write a program using console.log(), console.warn(), console.error(), and console.clear(). Observe what happens after each statement.
console.log("Step 1: Logging data...");
console.warn("Step 2: Warning check...");
console.error("Step 3: Error check...");
// console.clear(); // Clears all preceding messages from the developer console window.
