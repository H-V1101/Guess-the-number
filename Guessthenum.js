let a = Math.random()*100;
a = Math.round(a);
const prompt=require("prompt-sync")();
let b = prompt("Guess the Number : ")
// b=Number.parseInt(b);
let c = 1;
while(a!=b){
    console.log("the number is ",a<b?" less than  "+b:" greater than"+b);
    b=prompt("Guess the number again : ");
    c+=1;
}
console.log("you guess the right answer");
console.log("you guess the number in " + c + " times");

// let a = Math.random() * 100
// a = Math.round(a)
// let b = prompt("guess the number")
// let chances = 1
// while (a != b) {
//   console.log("the number is ", a < b ? "less than " + b : "greater than " + b)
//   b = prompt("guess the number again")
//   chances += 1
// }
// console.log("you guessed it right")