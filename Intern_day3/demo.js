let name="demo"
let val1=23
let val2=34.5

let isdataavail=true
let nodata=null

console.log( name)
console.log(val1)       
console.log(val2)
console.log(isdataavail)
console.log(nodata)


let a=10
let b="1"

console.log(a==b)
console.log(a===b)

console.log(a<b && a===c)
console.log(a>b || a===c)
console.log(!(a<b && a===c))


let arr=[12,34,45,564,67,67,4,34,22]
for (let a in arr)
console.log(arr[a])
console.log("im outside")


function display()
{
  console.log("hello")
}
display()
console.log("see u")

function add(a,b)
{
  let c=a+b;
  console.log("hello")
  return c;
}
let answ=add(10,23)
console.log("see u",answ)

function add(a,b)
{
  let c=a+b;
  console.log("hello")
   
}
 add(10,23)
console.log("see u")

function add()
{
  
  console.log("hello")
   return 10
}
 let ans=add()
console.log("see u",ans)
