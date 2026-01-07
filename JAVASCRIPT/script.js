// object creation

// const product = {
//     name : "Ball_pen",
//     price : 25,
//     color : "black",
//     isDiscount : true

// };

// console.log(product.color);

// const profile = {
//     userName : "Ali",
//     designation :"Enterprenuer",
//     isFollow: false,
//     age : 35
    
// }

// console.log(profile.isFollow);
// console.log(typeof(profile));


// use of condition

// let checkMultiple = prompt("Enter a number")
// if (checkMultiple % 5 === 0){
//     console.log("it is multiple of 5")
// } else{
//     console.log("not a multiple of 5")
// }


// let marks = prompt("Enter your marks:")
// if(marks <= 100 && marks>=80){
//     console.log("A");
// }else if(marks <= 89 && marks>=70){
//     console.log("B");

// }else if(marks <= 69 && marks>=60){
//     console.log("C");
// }else if(marks <= 59 && marks>=50){
//     console.log("D");
// }else{
//     console.log("F");
// }


// Use of Loop

// for(let i = 0; i <= 100; i++){
//     if(i % 2 ===0){
//         console.log(i);
    
// }}

// let number = Math.floor(Math.random() *10)
// let userNum =Number( prompt("Enter Number"));
// while(number !== userNum){
//     if(userNum<number){
//         console.log("too Low")
//     }else{
//         console.log("Too high")
//     }
// }

// console.log("Congratulations! You guessed it 🎉. The number was " + number);


// let userName = prompt("Please enter your name:")
// console.log(`@ ${userName} ${userName.length}`)

// hero =["ali","shahid","batmen"]

// for(i in hero){
//     console.log(hero[i])
// }


//  let array =  [85, 97, 44, 37, 76, 60]
//  let sum = 0;
//  for(let i =0; i<array.length;i++){
//     sum+= array[i];


// }
// let average =sum/array.length
// console.log(average)
    
// let items = [250, 645, 300, 900, 50]
// let offer = 0.1
// let newPrice = []
// for(let i = 0;i<items.length;i++){
//     let discount = items[i] * offer
//     console.log(offers)
//     newPrice.push(items[i] - discount)
//     console.log(newPrice)
// }

// let companies = ["Bloomberg" ,"Microsot" ,"IBM","Google","Netflix"]
// companies.shift()

// companies.splice(2,1,"Uber");
// companies.push("Amazon")
// console.log(companies)


// function vowels(str) {
//     let v = 0;

//     for (let i of str.toLowerCase()) {
//         if (
//             i === "a" ||
//             i === "e" ||
//             i === "i" ||
//             i === "o" ||
//             i === "u"
//         ) {
//             v++;
//         }
//     }

//     console.log(v);
// }

// vowels("Hey, my name is hifza i like oranges");


// const vowels = (str) =>{
//     let count = 0;
//     for (let i of str.toLowerCase())
//         if(
//             i === "a" ||
//             i === "e" ||
//             i === "o" ||
//             i === "i" ||
//             i === "u"

//         )
//         {
//             count++
//         }
//           console.log(count)
// }

// vowels("Hey my name is alee");

// array=[2,3,4,5,6]
//  array.forEach(val => {
//     console.log(val **2)
    
//  });

// let array =  [85, 90, 44, 37, 96, 60]
// let newArray = array.filter((val) =>{
//     return val >= 90;
// })
// console.log(newArray)

// let size = Number(prompt("enter number:"))
// let array =[]
// for(let i=0; i<=size;i++){
//     array.push(i);
// }

array =  [85, 90, 44, 37, 96, 60]
let sum =0;

// let newArray =array.reduce(
//     (current,next) => current + next,sum,

// );
// let product =1;
// let newArray =array.reduce(
//     (current,next) => current * next,product,

// );
// console.log(newArray)

// let title=document.getElementsByTagName("h2");
// title[0].append(" form ApnaCollege");
// console.log(title[0]);

// let boxes =document.getElementsByClassName("box")
// for (let i=0; i<boxes.length; i++){
//     boxes[i].innerHTML="Hi Iam a box";
//     console.log(boxes[i]);
    
// };
// let body =document.body;
// let button=document.getElementById("cls");
// body.prepend(button);
// console.log(body)



// let p2 =document.querySelector("p");
// p2.classList.add("para");
// console.log(p2);

// let btn=document.querySelector(".toggle-btn")
// btn.addEventListener("click",()=>{
//     btn.classList.toggle("active");
//     if (btn.classList.contains("active")) {
//         btn.innerText = "ON";
//     } else {
//         btn.innerText = "OFF";
//     }


// })


// let btn = document.getElementById("modeBtn");
// let body = document.querySelector("body");

// btn.addEventListener("click", () => {
//     body.classList.toggle("dark");

//     if (body.classList.contains("dark")) {
//         btn.innerText = "Light Mode";
//     } else {
//         btn.innerText = "Dark Mode";
//     }
// });

let data =[1,2,3,4]
class User{
    constructor(name,email){
    console.log("creating constructor...")
        this.name= "ali";
        this.email="ali@gmail.com";
    }
    viewData(){
        console.log("you can view data")

    }
}

class Admin extends User{
    constructor(role){
        super();
        this.role=role;

    }

    editData(){
        console.log("you can edit data")
    }

}


let user = new Admin("admin");
user.viewData();
