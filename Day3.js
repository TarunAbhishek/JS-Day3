//Write •a • JavaScript • script •that • uses • the •ternary • operator • to • determine if •a •number• is • even •or •odd.

let num1 = +prompt("Enter a number:");
let oe = (num1%2==0)? "Even": "Odd";
console.log(oe);

//Grade Classification: Declare a variable score and set it to a value between 0 and 100. Use nested ternary operators to classify the score into grades: A 90), B 75), C 60), D 45), qnd F (below 45). Log the grade.

let num2 = +prompt("Enter a number:");
let grade = (num2 >= 90)? "A" : (num2 >=75)? "B" : (num2>=60)? "C" : (num2 >=45)? "D" : "F";
console.log(grade);

//Temperature Check: Declare a variable temperature and use nested ternary operators to categorize it as "Hot"(above 30), "Warm" (20-30), "Cool" (10-19), and "Cold" (below 10). Log the result.

let val=+prompt("Enter a number:");
let temp_value=(val>30)? "Hot" : (val>=20)? "Warm" : (val>=10)? "Cool" : "Cold";
console.log(temp_value);

//Age Group: Declare a variable age and use the ternary operator to classify the age into "Child" (0-12), "Teen" (13-19), "Adult" (20-64), and "Senior" (65 and above). Log the result.
let age = +prompt("Enter a number:");
let age_group = (age <= 12)? "Child" : (age <= 19)?
"Teen" : (age <= 64)? "Adult" : "Senior";
console.log(age_group);
