const prompt = require('prompt-sync')();
var age=prompt("Enter your age: ")
if(age>=18)
{
    console.log('you are old enough to drive')
}
else
{
    console.log(`wait for ${age-18} year to drive`)
}