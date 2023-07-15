var num=23
check=1
if(num==1)
{
    check=0
}
else if(num==2)
{
    check=1
}
else
{
    for(let i=2;i<=num/2;i++)
    {
        if(num%i==0)
        {
            check=0
            break
        }
    }
}
if(check)
{
    console.log('number is prime')
}
else
{
    console.log('number is not prime')
}