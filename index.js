//  alert("rehan khan")
document.write("muhammad rehan khan")
console.warn("tthis is warrning");


var a=344;
var b=2;
document.write(a+b)
 a=40
document.write(a+b)
let r=2
let e=3

document.write(r+e)
r=5;
document.write(r+e)

document.write("break tehe line here to clera the stuff")

const k=4
const h=2
document.write(k+h)
// const k=5;
// document.write(k+h)
// variable section ended
var str2="  this is string you define"
str="this is also a type of string"
str2= 'rehan'
str3='khan'


document.write(str2 + str3)


num3=4
var num1=23;
var num2=26;
document.write("           "     + (num1+num2+num3))


// objects 
var marks={
    rehan : 85,
    Aslam : 80 ,
    attakhan : 60,

}
document.write( marks );
var x= true;
var y= false;
// and operation
document.write( x &&   y )
// or operation
document.write(    x || y )


var und=undefined
document.write(und)
var n= null
document.write(n)
// arrays concept

var arr= [1,2,"rehankhan" ,3,4,5]
document.write(arr[1, 3,  2])



var m=10;
var n=5;
document.write( "a+b is" + (m+n))
document.write( "a-b is" + (m-n))
document.write( "a*b is" + (m*n))
document.write( m==n)
document.write( m>=n)
document.write(true|| true)
document.write(true|| false)

function avg(a,b){
    c=(a+b)/2;
    return c;

}

// z=avg(4,6)
// document.write(z)
// var age=23;
// if(age>28){
//     document.write("your are a yung boy")
// }else{
//     document.write("your are not a yung boy")

// }


// if (age=23){
//     document.write("your boy")
// }

// the same multimpple if else statements are workig

document.write(" end of leader")


// condiotioal statements
age =201;
if(age<18){
    document.write("you are under age and your age is =  " + age)
}
else if(age == 18 || age<25){
    document.write("your are just enter into a elder ages and your age is = " + age)
}
else if (age >= 26 && age <201 ){
    document.write("you are aged and your age is = " + age)
}
else if (age>200){
    document.write("please enter a valid age number , and chwleen na maro please")
}
else{
    document.write("end of leader")
}
document.write("   r")

var reh=[1,2,3,4,5,6,7]
for (var i=0;i<reh.length;i++){
document.write(reh[i])
}
reh.forEach(function(element){
    document.write(element + "    ")

})

let j=0;
while (j<reh.length){
    document.write(reh[j])
    j++;
}



