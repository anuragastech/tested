// const lal=[45,85,95];
// function misteraa(l){
//     return l*5
// }
// var h=lal.map(misteraa);
// console.log(h);

// const { log } = require("console");


// const m =[5,6,7,8,9]
// function d (j){
//     sum= j+sum

// }
// const h =m.reduce(j);
// console.log(h);

// const f =[5,8,9,6,9,60];
// function mb(c){
//     return c%2
// }
// const v=f.filter(mb);
// console.log(v);

// const e = [5,7,9,6,3,1,2];
// function th (f,x){
//     return f+x
// }
// const r=e.reduce(th);
// console.log(r);

// const d= [7,8,9,4,5,6,1,2,3];
// function hell(i){
//     console.log(i) ;
// }

//  d.forEach(hell);

// const goal=[55,9,56,25,80];
// function hell (z){
//     console.log(z);
// }
// goal.forEach(hell)

// callback

// callback

// function lnd (something){
//     alert(something);

// function myd (something){
// // console.log("something")
// // document.getElementById().innerHTML="something"
// alert(something)

// }
//  function lmd (num1,num2,mycallback) {
//  let  sum=num1+num2;
//  mycallback(sum);
//  }
//  lmd(8,8,myd);

// function fh (lal){
//     alert(lal);
// }
// function klc(num1,num2,callback){
//     let ss = num1 * num2;
//     myCallback(ss);
// }
// klc(5,9,fh)

// function fh(lal) {
//     alert(lal);
//   }

//   function klc(num1, num2, callback) {
//     let ss = num1 * num2;
//     callback(ss);
//   }

//   klc(5, 9, fh);

// function jl(name, age, callback) {
//     callback(name, age);
//   }

//   function hh(name, age) {
//     console.log(`Hello, I am ${name}, my age is ${age}`);
//   }

//   jl("ram", 56, hh);

// object calling

// function persons (Firstname,Secondname,Age){
//     this.Firstname=Firstname;
//     this.Secondname=Secondname;
//     this.Age=Age;
// }
// const person= new persons("john","hecker",23);

// console.log(person.Age);



const goal=[55,9,56,25,80];
function hell (z){
    console.log(z);
}
goal.forEach(hell)



// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

function combat(health, damage) {
    // Write your code here
    var newHealth = health-damage;
    
      return newHealth < 0 ? 0 : newHealth;
    
      
    
  }
  
  combat(95,20);



  