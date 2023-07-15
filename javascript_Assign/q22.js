const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
var mini=ages[0],maxi=ages[ages.length-1],mid
console.log('minimum is',mini)
console.log('maximum is',maxi)
if(ages.length%2==0)
{
    mid=ages.length/2;
    console.log('median is',(ages[mid-1]+ages[mid])/2)
}
else
{
    mid=ages.length/2;
    console.log('median is',ages[mid])
}
var sum=0;
for(let i=0;i<ages.length;i++)
{
    sum+=ages[i]
}
var avg=sum/ages.length
console.log('average is',avg)
console.log('range is',maxi-mini)
console.log('min-avergae is ',Math.abs(mini-avg), 'max - average is ',Math.abs(maxi-avg))