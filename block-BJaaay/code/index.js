//  Loop basics

// Do the following using loops:

// Using `console.log` log all the values from 1 to 10.
console.log(`Vlaues from 1-10`);
for (let i=0 ; i<=10 ; i++)
{
    console.log(i);
}

// Using `console.log` log all the evan values from 1 to 10.
console.log(`Even Vlaues from 1-10`);
for (let i=0 ; i<=10 ; i++)
{
    if(i%2 == 0)
    {
        console.log(i);
    }

}


// Using `console.log` log all the od values from 1 to 10.
console.log(`Odd Vlaues from 1-10`);
for (let i=0 ; i<=10 ; i++)
{
    if(i%2 != 0)
    {
        console.log(i);
    }

}

// Calculate the sum of all numbers from 1 to 10.
let j = 0;
for (let i=0 ; i<=10 ; i++)
{
    
       
       j= j+i;
}
        console.log(`Sum of numbers from 1-10`)
        console.log(j);
    




// Log all the values from 1 to 10 using while loop

let i=0;
console.log(`Vlaues from 1-10`);
while(i<=10){
    console.log(i);
    i++;
}