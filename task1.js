   // ==========================================
// 1. VAR QUESTIONS
// ==========================================

// 1. Create a var variable called name and initialize it with your name. Print it.
var varName = "sudha yanamala";
console.log(varName);

// 2. Create a var variable called age with value 25. Reassign it to 30 and print it.
var varAge = 25;
varAge = 30;
console.log(varAge);

// 3. Create a var variable called city, assign "Chennai", then reassign "Bangalore". Print the final value.
var varCity = "Chennai";
varCity = "bangalore";
console.log(varCity);

// 4. Create a var variable called salary and initialize it with 25000. Redeclare it with 35000. Print the value.
var varSalary = 25000;
var varSalary = 35000;
console.log(varSalary);

// 5. Create a var variable, assign a value, reassign it, and redeclare it. Print the final value.
var varCountry = "India";
varCountry = "USA";
var varCountry = "Canada";
console.log(varCountry);

// 6. Create a var variable called department with "ECE" and redeclare it with "CSE".
var varDepartment = "ECE";
var varDepartment = "CSE";
console.log(varDepartment);

// 7. Create a var variable called mark with 50, reassign it to 75, and print it.
var varMark = 50;
varMark = 75;
console.log(varMark);

// 8. Create a var variable called company and redeclare it with another company name.
var varCompany = "TCS";
var varCompany = "Wipro";
console.log(varCompany);

// 9. Create a var variable without assigning a value, then initialize it later and print it.
var varDesignation;
varDesignation = "Software Engineer";
console.log(varDesignation);

// 10. Create one var variable and change its value three times. Print the final value.
var varProject = "Project A";
varProject = "Project B";
varProject = "Project C";
console.log(varProject);


// ==========================================
// 2. LET QUESTIONS
// ==========================================

// 1. Create a let variable called age and initialize it with your age. Print it.
let letAge = 21;
console.log(letAge);

// 2. Create a let variable called salary, initialize it with 30000, then reassign it to 40000.
let letSalary = 30000;
letSalary = 40000;
console.log(letSalary);

// 3. Create a let variable called name, assign your name, then change it to another name.
let letName = "sai sudha";
letName = "saisudha yanamala";
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
// let letCountry = "USA"; // Throws SyntaxError: Identifier 'letCountry' has already been declared

// 8. Create a let variable called city and reassign it two times. Print the final value.
let letCity2 = "Chennai";
letCity2 = "Bangalore";
letCity2 = "Hyderabad";
console.log(letCity2);

// 9. Create three different let variables and print all three.
let letCompany1 = "TCS";
let letDepartment1 = "ECE";
let letSalary1 = 30000;
console.log(letCompany1, letDepartment1, letSalary1);

// 10. Create a let variable, initialize it, reassign it, and try to redeclare it.
let letProject = "Project A";
letProject = "Project B";
// let letProject = "Project C"; // Throws SyntaxError: Identifier 'letProject' has already been declared


// ==========================================
// 3. CONST QUESTIONS
// ==========================================

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
// constAge2 = 30; // Throws TypeError: Assignment to constant variable.

// 5. Try to redeclare a const variable. Observe the result.
const constSalary2 = 50000;
// const constSalary2 = 60000; // Throws SyntaxError: Identifier 'constSalary2' has already been declared

// 6. Create a const variable called college and initialize it with your college name.
const college = "Audisankara institute of technology";
console.log(college);

// 7. Create three const variables for name, age, and department. Print them.
const constName3 = "yanamala";
const constAge3 = 21;
const constDept3 = "cse";
console.log(constName3, constAge3, constDept3);

// 8. Write a program using one var, one let, and one const variable. Print all three.
var mixName = "sree";
let mixAge = 21;
const mixDept = "cse";
console.log(mixName, mixAge, mixDept);


// ==========================================
// 4. PRINTING STATEMENTS
// ==========================================

// 1. Print your name using console.log().
console.log("swarna");

// 2. Create a variable containing your age and print it using console.log().
let agePrint = 21;
console.log(agePrint);

// 3. Print the number 100 using console.log().
console.log(100);

// 4. Create three variables and print their values using console.log().
let var1 = "sree";
let var2 = 2;
let var3 = "Value 3";
console.log(var1, var2, var3);

// 5. Create a variable called message with "Hello JavaScript" and print it.
let message = "Hello JavaScript";
console.log(message);

// 6. Create a variable, print its value, change its value, and print it again.
let value = "Initial Value";
console.log(value);
value = "Changed Value";
console.log(value);

// 7. Print your name, age, and qualification using three separate console.log() statements.
console.log("swapna");
console.log(21);
console.log("Bachelor of Technology");


// ==========================================
// 5. ALERT EQUIVALENTS (Using console.log)
// ==========================================

// 1. Display "Welcome to JavaScript"
console.log("Welcome to JavaScript");

// 2. Create a variable called userName and display it
let user_name = " lakshmi";
console.log(user_name);

// 3. Create a variable called userAge and display it
let user_age = 21;
console.log(user_age);

// 4. Create a variable containing "Welcome Naveen"
console.log("Welcome Naveen");

// 5. Create a variable containing your qualification and display it
let Quali_fication = "Bachelor of Technology";
console.log(Quali_fication);


// ==========================================
// 6. PROMPT EQUIVALENTS
// ==========================================

// 1. Ask the user "What is your name?"
let username = "Sudha";
console.log(username);

// 2. Ask the user "How old are you?"
let userage = "21";
console.log(userage);

// 3. Ask the user for their qualification
let Qualification = "B.Tech";
console.log(Qualification);

// 4. Ask the user for their name
let enteredName = "Sudha";
console.log(enteredName);

// 5. Ask the user for their age
let enteredAge = "21";
console.log(enteredAge);


// ==========================================
// 7. CONFIRM & DOCUMENT.WRITELN EQUIVALENTS
// ==========================================

// 1. Create a confirmation box asking "Do you know programming?"
let programmingKnowledge = true;
console.log("Programming knowledge:", programmingKnowledge);

// 2. Create a variable containing "Welcome to Batch 41"
let welcomeMessage = "Welcome to Batch 41";
console.log(welcomeMessage);

// 3. Ask the user "Do you want to continue?"
let continueChoice = true;
console.log("Continue choice:", continueChoice);


// ==========================================
// 8. CONSOLE METHODS
// ==========================================

// 1. Write one program that uses console.log(), console.warn(), and console.error()
console.log("This is a log message.");
console.warn("This is a warning message.");
console.error("This is an error message.");

// 2. Write a program using console.log(), console.warn(), console.error(), and console.clear()
console.log("This is a log message.");
console.warn("This is a warning message.");
console.error("This is an error message.");
//console.clear();
