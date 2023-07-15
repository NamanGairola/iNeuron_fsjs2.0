var countries=['India','America','Aus','pak']
var check=true
for(let i=0;i<countries.length;i++)
{
    if(countries[i]=='Ethiopia')
    {
        check=false
        console.log(ETHIOPIA)
    }
}
if(check)
{
    countries.push('Ethiopia')
    console.log(countries)
}