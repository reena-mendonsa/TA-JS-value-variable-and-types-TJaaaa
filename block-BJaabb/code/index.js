/* 1. Do the following

1. Declare a variable `user` and take the name using `prompt`. Display the value stored in `user` using `alert`.
2. Now copy the value of `user` into a new variable named `userName`. Log the value of both `user` and `userName` using `console.log`.
3. Declare variable `age` and `isLearning` with value `22` and `true` in the same line. hint: declaring multiplemvariable in one line.
4. Now change the value of `user` to `John` and log the value of both `user` and `userName`.
*/

/* 2.
Use `prompt` to take two numbers from user and store it in variable `numA` and `numB`. Create a third variable called `sum`, using `+` operator add numA and numB , store it in varible `sum` and using alert display `sum` in browser.
*/

// Loops

// 3. Complete the following code to make the output be 0 2 4 6 8 10?

// ----------------for (let j = 0; j <= 10; ____) console.log(j);

// 4. Print the odd numbers from 9 to 1 (both inclusive) using a for loop.

// 5. Concat all the numbers from 5 to 0 (both inclusive) in descending order using a while loop. (543210)

// 6. Concat all the even numbers from 10 to 0 (both inclusive) in descending order using a while loop. (1086420)

// Comparisoin

/* 7. Take two value using prompt and store them in variables `num1` and `num2`. Check whether they are equal or not.

- `alert` true or false base on the entered value.
- if the input value is anything like `true`, `null` or `undefined` alert saying `Enter a valid value`.


Example:

21, 21; // true
"hello", -21; // false

*/



/******************************************************************** */
/* 1. Do the following

1. Declare a variable `user` and take the name using `prompt`. Display the value stored in `user` using `alert`.
2. Now copy the value of `user` into a new variable named `userName`. Log the value of both `user` and `userName` using `console.log`.
3. Declare variable `age` and `isLearning` with value `22` and `true` in the same line. hint: declaring multiplemvariable in one line.
4. Now change the value of `user` to `John` and log the value of both `user` and `userName`.
*/
let user = prompt(`Enter your Name`);
alert(`Your Name is ${user}`);

let userName= user;

console.log(`${user}`);
console.log(userName);

let age =22 , isLearning = true ;
 user ='John';
 console.log(user);
 console.log(userName);

 /* 2.
Use `prompt` to take two numbers from user and store it in variable `numA` and `numB`. Create a third variable called `sum`, using `+` operator add numA and numB , store it in varible `sum` and using alert display `sum` in browser.
*/
let numA = prompt(`Enter first Number`);
let numB = prompt(`Enter second Number`);
let sum = Number(numA) + Number(numB);
console.log(sum);

// 3. Complete the following code to make the output be 0 2 4 6 8 10?

for (let j = 0; j <= 10; j=j+2) console.log(j);

// 4. Print the odd numbers from 9 to 1 (both inclusive) using a for loop.
console.log(`odd numbers from 9 to 1 `);
let j;
for(let i=9 ; i>0 ; i--)
{
      j = i%2;
    if(j!=0){ 
    console.log(i);
    }
} 

// 5. Concat all the numbers from 5 to 0 (both inclusive) in descending order using a while loop. (543210)
let i=5;

let k="";
while(i>=0)
{
    
    
    k=k+String(i);
    i--;
}

console.log(k);

// 6. Concat all the even numbers from 10 to 0 (both inclusive) in descending order using a while loop. (1086420)
let evenNum="";
let y;
let z=10;
for (z=10 ; z>=0 ; z--)
{
    y=z%2;
    if(y==0)
    {
        evenNum=evenNum+String(z);
    }
}
console.log(evenNum);


/* 7. Take two value using prompt and store them in variables `num1` and `num2`. Check whether they are equal or not.

- `alert` true or false base on the entered value.
- if the input value is anything like `true`, `null` or `undefined` alert saying `Enter a valid value`.


Example:

21, 21; // true
"hello", -21; // false

*/

let num1 = prompt(`Enter first number:`);
let num2 = prompt(`Enter second number:`);

if(num1 === num2)
{
    alert(`True`);

}
else if(num1 && num2 === 'true' && 'null' && 'undefined')
{
    alert(`Enter valid number!`);
}
else{
    alert(`False`)
}


