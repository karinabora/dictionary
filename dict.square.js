n=require("readline-sync")
a=n.question("enter the:")
l={}
i=0
while (i<=a){
    b=i**2
    l[i]=b
    i+=1
}
console.log(l);