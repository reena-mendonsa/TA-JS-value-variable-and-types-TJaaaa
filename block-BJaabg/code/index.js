/*
🎖 Write a program to calculate the total price of your phone purchase.
 With these conditions
 * [ ] You will keep purchasing phones (hint: loop!) until you run out of bank balance.
 * [ ] You'll also buy accessories for each phone as long as your purchase amount is below 
 * your spending threshold.
 * [ ] After you've calculated your purchase amount, add in the tax, then print out the calculated 
 * purchase amount, properly formatted like ($334.76).
 * [ ] Finally, check the amount against your bank account balance to see if you can
 *  afford it or not.
*/

const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 303.91;
var amount = 0;
// your code goes here

// ⛑ Answer of the above will `$334.76`.
let ph=0;
let acc=0;
let spending=0;
for(let i=1 ; i <=303.91 ;i++)
{
    
    bank_balance = bank_balance - PHONE_PRICE ;
    if(bank_balance>99.99)
    {
        ph = PHONE_PRICE *i;
        
    }else{
        break;
    }
    
    i++;
}

for(let j=1 ; j <=200 ;j++)
{
    if(j==1){
        spending = SPENDING_THRESHOLD - ACCESSORY_PRICE ;
    }else{
        spending = spending - ACCESSORY_PRICE;
    }
    
    if(spending>9.99)
    {
        acc = ACCESSORY_PRICE*j;
        
    }else{
        break;
    }
    
    j++;
}

amount = ph + acc + TAX_RATE;

alert(`Amount spent is $ ${amount}`);
