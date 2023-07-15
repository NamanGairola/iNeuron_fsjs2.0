var weight=66,height=1.74
var bmi=weight/(height*height)
if(bmi<18.5)
{
    console.log('underweight')
}
else if(bmi<25)
{
    console.log('normal')
}
else if(bmi<30)
{
    console.log('overweight')
}
else
{
    console.log('obese')
}