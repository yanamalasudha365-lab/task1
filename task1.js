// ==========================================
// 1. var — 10 Questions
// ==========================================
{
  var name = "sudha yanamala";
  console.log(name);

  var age = 25;
  age = 30;
  console.log(age);

  var city = "Chennai";
  city = "bangalore";
  console.log(city);

  var salary = 25000;
  var salary = 35000;
  console.log(salary);

  var country = "India";
  country = "USA";
  var country = "Canada";
  console.log(country);

  var department = "ECE";
  var department = "CSE";
  console.log(department);

  var mark = 50;
  mark = 75;
  console.log(mark);

  var company = "TCS";
  var company = "Wipro";
  console.log(company);

  var designation;
  designation = "Software Engineer";
  console.log(designation);

  var project = "Project A";
  project = "Project B";
  project = "Project C";
  console.log(project);
}

// ==========================================
// 2. let — 10 Questions
// ==========================================
{
  let age1 = 21;
  console.log(age1);

  let salary1 = 30000;
  salary1 = 40000;
  console.log(salary1);

  let name1 = "sudha";
  name1 = "sudha yanamala";
  console.log(name1);

  let department = "ECE";
  department = "CSE";
  console.log(department);

  let mark = 60;
  mark = 90;
  console.log(mark);

  let city;
  city = "Chennai";
  console.log(city);

  // Intentionally caught to prevent stopping execution:
  try {
    let country = "India";
    // let country = "USA"; // SyntaxError if uncommented
  } catch (e) {
    console.error(e.message);
  }

  let city2 = "Chennai";
  city2 = "Bangalore";
  city2 = "Hyderabad";
  console.log(city2);

  let company = "TCS";
  let department2 = "ECE";
  let salary = 30000;
  console.log(company, department2, salary);

  let project = "Project A";
  project = "Project B";
  // let project = "Project C"; // SyntaxError if uncommented
}

// ==========================================
// 3. const — 8 Questions
// ==========================================
{
  const age = 25;
  console.log(age);

  const salary = 50000;
  console.log(salary);

  const company = "Stackly";
  console.log(company);

  // Reassignment test:
  try {
    const ageConst = 25;
    // ageConst = 30; // Throws TypeError: Assignment to constant variable.
  } catch (e) {
    console.error(e.message);
  }

  const college = "Audisankara institute of technology";
  console.log(college);

  const name = "sudha yanamala";
  const age2 = 21;
  const department = "cse";
  console.log(name, age2, department);

  var nameVar = "sudha";
  let ageLet = 21;
  const deptConst = "cse";
  console.log(nameVar, ageLet, deptConst);
}

// ==========================================
// 4. Printing Statements — 7 Questions
// ==========================================
{
  console.log("sudha yanamala");

  let age = 21;
  console.log(age);

  console.log(100);

  let var1 = "sree";
  let var2 = 2;
  let var3 = "Value 3";
  console.log(var1, var2, var3);

  let message = "Hello JavaScript";
  console.log(message);

  let value = "Initial Value";
  console.log(value);
  value = "Changed Value";
  console.log(value);

  console.log("sudha yanamala");
  console.log(21);
  console.log("Bachelor of Technology");
}

// ==========================================
// 5. alert(), prompt(), confirm(), & Console Methods
// ==========================================
{
  // Console logging demo
  console.log("This is a log message.");
  console.warn("This is a warning message.");
  console.error("This is an error message.");

  // Note: console.clear() will wipe the console clean up to this point.
  // console.clear(); 
}