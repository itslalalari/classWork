//Larissa Giddings
//Array Test Page 28Jan2024

//Step 3: create a new array and place four values in it
var doge = new Array ();

doge[0] = 4;
doge[1] = 3;
doge[2] = 2;
doge[3] = 1;
doge[4] = 7;

//Step 4: take a single parameter, add one, then log
console.log("These are the result of step 4:")

for (var i = 0; i < doge.length; i++)
{
   console.log(doge[i]);
}


//step 5: Function expression that prints if a number is odd or even.
console.log("This is the result of step 5:")
function stepFive()
{
var cheezburger = i
if( cheezburger % 2 == 0) //if there is a remainder, it is not even.
{
    console.log(cheezburger + " is even.");
}                    

else 
{ 
    console.log(cheezburger + " is odd.")
}
}
console.log(stepFive());

 //Step 6: Create for-in loop that loops the indexex through the array, using function from step 5 
console.log("The following is step 6:");

for (var i in doge)
{
    doge[i] = console.log(stepFive());
}