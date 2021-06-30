// Condition
// Write your code below each problems:

/*
Write a program that asks the user his/her age and check for the following conditions :

- `if` the age is between 12-55 then print the message "You can participate in the marathon".
- `if` the age is between 4-11 then print the message " You are too young to participate in the marathon".
- `if` the age is less than 4 then print the message " Hey Kiddo! Can You Walk ?"
- `if` the age is greater than 55 then print the message " You are too old to participate in the marthon".
👇
*/

let age =+prompt("Enter your Age");
if(age<=55 && age >=12){
  console.log("You can participate in the marathon");
}else if(age>=4 && age<=11){
  console.log(" You are too young to participate in the marathon");
}else if(age<4){
  console.log("Hey Kiddo ! Can You Walk?");
}else{
  console.log(" You are too old to participate in the marthon");
}

// Loops
/*
Given a positive integer `n`. Print the word (hello) in format of heeeello (letter 'e' must be repeated `n` times). Take input from prompt and print the result in alert.

Example:
n = 1 => output: hello
n = 7 => output: heeeeeeello
👇
*/
// [Your code goes here]
let strings="";
let n=+prompt(`Enter a Positive number`);
for(let i=0 ;i<n ;i++)
{
   strings = strings + "e";
  var string = "h"+strings+"llo";
  
}
alert(string);
/*
Program to calculate the sum of first n natural numbers(1,2,3...n are known as natural numbers). Prompt user to enter n (using `prompt`) then based on input provided calculate and show result in `alert`.
👇
*/
// [Your code goes here]
let n1 = +prompt(`Enter the value of n`);
let sum =0;
for (let i=0 ; i<=n1 ;i++){
 
  sum = sum +i;
}
alert(`sum of first n number is: ${sum}`);
/* Switch Statement

 🎖Using switch statement do the following

Take a number value from user and alert the message if it matches the conditions.
* [ ] ONE, if `number` is equal to 1.
* [ ] TWO, if `number` is equal to 2.
* [ ] THREE, if `number` is equal to 3.
* [ ] FOUR, if `number` is equal to 4.
* [ ] FIVE, if `number` is equal to 5.
* [ ] SIX, if `number` is equal to 6.
* [ ] SEVEN, if `number` is equal to 7.
* [ ] EIGHT, if `number` is equal to 8.
* [ ] NINE, if `number` is equal to 9.
* [ ] PLEASE TRY AGAIN, if  is none of the above.

*/
// [Your code goes here]
let number = +prompt(`Number Value`);
switch(number)
{
  case 1:
    alert(`ONE`);
    break;
  case 2:
    alert(`TWO`);
    break;
  case 3:
    alert(`THREE`);
    break;
  case 4:
    alert(`Four`);
    break;
  case 5:
    alert(`Five`);
    break;
  case 6:
    alert(`SIX`);
    break;
  case 7:
    alert(`SEVEN`);
    break;
  case 8:
    alert(`Eight`);
    break;
  case 9:
    alert(`NINE`);
    break;
  default:
      alert(`PLEASE TRY AGAIN`);
}
/*
🎖Using switch statement do the following

Take the value of `marks` (0-100) from user using `prompt` and `alert` the message (Your Grade is AA) as giver below.
* [ ] `AA` if `marks` is greater than 90.
* [ ] `AB` if `marks` is greater than 80 and less than or equal to 90
* [ ] `BB` if `marks` is greater than 70 and less than or equal to 80
* [ ] `BC` if `marks` is greater than 60 and less than or equal to 70
* [ ] `CC` if `marks` is greater than 50 and less than or equal to 60
* [ ] `CD` if `marks` is greater than 40 and less than or equal to 50
* [ ] `DD` if `marks` is greater than 30 and less than or equal to 40
* [ ] `FF` if `marks` is less than or equal to 30
*/

// [Your code goes here]
let grade="";
let marks=+prompt(`Enter your marks!`);
if(marks>90){
  grade ='AA';
}
if(marks>80 && marks<=90){
  grade ='AB';
}
if(marks>70 && marks<=80){
  grade='BB';
}
if(marks>60 && marks<=70){
  grade='BC';

}
if(marks>50 && marks<=60){
  grade='CC';
}
if(marks >40 && marks <=50){
  grade='CD';
}

if(marks>30 && marks<=40){
  grade='DD';
}

if(marks<=30){
  grade='FF';
}
switch(grade){
  case 'AA': alert('Your Grade is AA') ;
  break;
  case 'AB' :alert('Your Grade is AB') ;
  break;
  case 'BB' : alert(`Your Grade is BB`);
  break;
  case 'BC' :case 'BB' : alert(`Your Grade is BC`);
  break;
  case 'CC' : alert(`Your Grade is CC`);
  break;
  case 'CD' : alert(`Your Grade is CD`);
  break;
  case 'DD' : alert(`Your Grade is DD`);
  break;
  case 'FF' : alert(`Your Grade is FF`);
  break;
}

/*
 🎖Write a JavaScript program that takes two `integers` from user (using prompt)
  and alerts the larger number.
*/
// [your code goes here]

let number1 = +prompt('First Number');
let number2 = +prompt(`Second Number`);
if(number1 > number2)
{
  alert(`${number1}`);
}else{
  alert(`${number2}`);
}

/*
🎖Write a JavaScript conditional statement to find the sign (+, -) of product of 
three numbers. Take those three numbers from user using `prompt`.
 Display an alert box with the specified sign.
*/
// [Your code goes here]

let x = +prompt('Number1');
let y=+prompt(`Number2`);
let z=+prompt(`Number3`);

let product = x* y* z;
if (product <0 ){
  alert(`The sign is -`);
}
else {
  alert(`The sign is +`);
}

/* Calculator
 🎖Make a simple calculator with these functions. Using prompt, type conversion,
  if else statement. Use prompt to take the input from user i.e two numbers and an 
  operation (Add, Sub, Mul, Div).

  ⛑ Rule
    * [ ] While substracting and dividing keep in mind the number one should be 
  greater then number two. If not show alert saying `Number Two is larger then Number one`.
  ⚡️ Operations
    * [ ] Add
    * [ ] Sub
    * [ ] Mul
    * [ ] Div
*/

let calNum1= +prompt(`Enter the first number`);
let calNum2 =+prompt(`Enter the Second number`);
let result=0;
let operation=prompt(`Enter the operation to be performed`);

if(operation == "+"){
  result = calNum1 + calNum2;
  alert(`${result}`);
}else if(operation == "*"){
  result= calNum2 * calNum1;
  alert(`${result}`);
}else if(operation== "-"){
  if(calNum1>calNum2){
    result=calNum1-calNum2;
    alert(`${result}`);
  }
  else{
    alert(`Number2 is larger`);
  }
}else{
  if(calNum1>calNum2){
    result=calNum1/calNum2;
    alert(`${result}`);
  }
  else{
    alert(`Number2 is larger`);
  }
}


// [Your code goes here]
