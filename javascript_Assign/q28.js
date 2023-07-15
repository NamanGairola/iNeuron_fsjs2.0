var n=3
for(let i=0;i<n;i++)
{
    for(let j=0;j<=i;j++)
    {
        process.stdout.write('*')
    }
    console.log()
}
console.log()
for(let i=0;i<n;i++)
{
    for(let j=0;j<n;j++)
    {
        process.stdout.write('*')
    }
    console.log()
}
console.log()
for(let i=0;i<n;i++)
{
    for(let j=0;j<n-i-1;j++)
    {
        process.stdout.write(' ')
    }
    for(let j=0;j<i*2+1;j++)
    {
        process.stdout.write('*')
    }
    console.log()
}