// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

// 3. Convert the above code using`?` terniary operator

/*
`4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/

// 5. Convert the above code using`?` terniary operator

// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/


/* 1.if else ...*/

let number = prompt(`Enter a Number !`);
let result = number%2;
if (result==0)
{
  alert(`Number is even!`);
}
else{
  alert(`Number is odd`);
}

/*2*/

let number1= prompt(`Enter first Number`);
let number2 = prompt(`Enter Second number`);

if(number1 > number2)
{
  alert(`Max number is ${number1}`);
}
else{
  alert(`Max number is ${number2}`);
}
/*********3******* */
number1 > number2 ? alert(`Maximum number is ${number1}`) : alert(`Maximum number is ${number2}`);

/**********4****** ***/

let houseName=prompt(`What is your House name?`);
if(houseName=="stark"){
 alert(`Winter is coming`); 
}else if(houseName=="lannister"){
  alert(`A lannister always pays his debt`);
}else{
  alert(`All men must die!`);
}

/*******5******* */
alert(`Using a ternary operator`);
houseName=="stark" ? alert(`Winter is coming`)
: houseName=="lannister" ? alert(`A lannister always pays his debt`)
: alert(`All men must die!`);

/*********6********* */

let month = prompt(`Enter the month(1-12)`);

switch(Number(month)){
  case 1 : 
  alert(`No of days in January month 31 days`);
  break;
  case 2:
    alert(`No of days in February month 28 days`);
  break;
  case 3:alert(`No of days in March month 31 days`);
  break;
  case 4:alert(`No of days in April month 30 days`);
  break;
  case 5:alert(`No of days in May month 31 days`);
  break;
  case 6:alert(`No of days in June month 30 days`);
  break;
  case 7:alert(`No of days in July month 31 days`);
  break;
  case 8:alert(`No of days in August month 31 days`);
  break;
  case 9:alert(`No of days in September month 30 days`);
  break;
  case 10:alert(`No of days in October month 31 days`);
  break;
  case 11:alert(`No of days in November month 30 days`);
  break;
  case 12:alert(`No of days in December month 31 days`);
  break;
  default:
        alert(`'Invalid day'!!`);
}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let salary=prompt(`Enter your Salary`);
let tax;
let amtInHand;
if(Number(salary) <=20000)
{
  tax= (salary* 10)/100;
  amtInHand=salary - tax ;
  alert(`Amount in hand ${amtInHand}.`);
}
else if(Number(salary) <=40000)
{
  tax= (salary* 20)/100;
  amtInHand=salary - tax ;
  alert(`Amount in hand ${amtInHand}.`);
}
else{
  tax= (salary* 10)/100;
  amtInHand=salary - tax ;
  alert(`Amount in hand ${amtInHand}.`);
}

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let marks = prompt(`Enter your marks`);

if(Number(marks)>100){
  alert(`Marks can't be greater than 100`);

}else if(Number(marks) >80){
  alert(`"Grade A"`);
}else if(Number(marks) >50 && Number(marks) < 80){
  alert(`Grade B`);

}else if(Number(marks)>30 && Number(marks)<50){
  alert(`Grade C`);
}else{
  alert(`Grade D`);
}

let marks2 = prompt(`Enter your marks`);


switch (true) {
  // If score is greater than 100
  case Number(marks2) > 100:
    alert(`Marks can't be greater than 100`);
      break;
  // If score is greater than 80 
  case Number(marks2) >= 80:
    alert(`"Grade A"`);
      break;
  // If score is 50 < 80
  case Number(marks2) >50 && Number(marks2) < 80:
    alert(`Grade B`);
      break;
  // If score is 30 and < 50
  case Number(marks2) >30 && Number(marks)<50:
    alert(`Grade C`);
      break;
  // Anything  below is D
  default:
     alert(`Grade D`);
}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let weather=prompt(`How's the weather out today?`);

if ( weather == "sunny")
{
  alert(`Wear a T-shirt!`);
}
else if(weather == "rainy")
{
  alert(`Don't forget to take a raincoat!`);
}else if ( weather=="hot")
{
  alert(`Get a Hanky!`);
}else if(weather == "freezing")
{
  alert(`Get your Sweater!`);
}else{
  alert(`Not a valid output`);
}