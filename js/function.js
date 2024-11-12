
// function sum(a, b){

//     let c = Number(a)+ Number(b);
//     return c;
// }

// const out = sum(prompt("Enter first number"), prompt("Enter second value"))
// console.log(out)

function subract(a,b){
    const c=Number(a)-Number(b);
    return c;
}

const out=subract(prompt("Enter first num"),prompt("Enter 2nd num"))
console.log(out)
let age = 18;

if (age >= 18) {
    console.log("You are eligible to vote.");
} else if (age >= 16) {
    console.log("You can drive, but you can't vote.");
} else {
    console.log("You are too young to vote or drive.");
}

function condition(a,b){
    if(a<b){
        console.log("a is lesser");
    }
    else if(a>b){
           console.log("b is greater")
    }
    else {
        console.log("a is equal to b")
    }
}

condition(1, 5)