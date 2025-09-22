// console.log("welcome to company");
// // alert("aman");
// firstName = "Animan";
// console.log(firstName);
// {
//     let a="aman";
//     console.log(a);
// }
// {
//     let b=56;
//     console.log(b);
// }
// let fullName = "Aman Agarwal";


// console.log(a)
// greet()
// function greet(){
//     console.log("good")
// }
// var a;

// function sum(x,y)
// {
//     s=x+y;
//     console.log("return loggg")
//         return s; 
// }
// let val = sum(3,4);
// console.log(val);
// const arrowsum = (a,b) => {
//     s=a+b;
//     return s;
// }
// let val = arrowsum(2,4);
// console.log(val);

// const multi = (a,b) => {
//     console.log(a*b);
// }

// function vowel(str){
//     let count=0;
//     for(const char of str){
//         if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u")
//            { 
//             count++;
//             } 
//      }
//    console.log(count) ;
// }

// const vowel = (str) => {
//     let count = 0;
//     for(const char of str){
//         if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u")
//         {
//             count++;
//         }
//     }
//     return count;
// }

// let a = "aman".toUpperCase();
// console.log("aman".toUpperCase());

// game(2,5);
// console.log(a);
 
// let a = 5;
// function game(x,y){
//     console.log(x+y);
// }

// function createCounter() {
//   let count = 0;
//   return function() {
//     count++;
//     return count;
//   };
// }

// const counter = createCounter();
// console.log(counter()); 
// console.log(counter());

// let a = aman(2,5);
// console.log(a);
// let x = 50;
// function aman(a,b){
//     console.log(a+b);
//     return aman;
// }


// function vowel(str)
// {
//     let count=0;
//     return function()
//     {
//         for(char of str)
//         {
//             if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u")
//             {
//                 count++;
//             }
//         }
        
    
//     return count;
//     }
// }
// const a=vowel("amanaaa");
// console.log(a());
// console.log(a());

// function sum(a,b)
// {
//     if(a>b)
//     {
//         console.log("Greater")
//     }
//     else if(a===b)
//     {
//         console.log("equal")
//     }
//     else{
//         console.log("less")
//     }
// }
// sum(2,4);

// function checksign(n)
// {
//     if(n>0)
//     {
//         console.log("positive");
//     }
//     else if(n===0)
//     {
//         console.log("zeroo");
//     }
//     else
//     {
//         console.log("negative");
        
//     }
// }
// console.log(checksign(5));
// console.log(checksign(0));
// console.log(checksign(-3));

// function comparesums(a,b,c,d)
// {
//     sum1 = a+b;
//     sum2 = c+d;
//     if(sum1>sum2)
//     {
//         console.log(true);
//     }
//     else 
//     {
//         console.log(false);
//     }
// }
// comparesums(8,3,4,5);
// let a=5;
// console.log(typeof(a));

// function checkoddeven(num)
// {
//     if(num%2 !== 0)
//     {
//         console.log("Even");
//     }
//     else
//     {
//         console.log("odd");
//     }
// }
// checkoddeven(8);


// function converttofahrenheit(celsis)
// {
//     f=celsis*9/5+32;
//     console.log(f);
// }
// converttofahrenheit(101);

// // function number(n)
// // {
// //     for(let i = 0; i<n ; i++)
// //     {
// //         if(i%3===0)
// //         {
// //             console.log("Fizz");
// //         }
// //         else if(i%5===0)
// //         {
// //             console.log("buzz");
// //         }
// //         else if(i%3===0&&i%5===0)
// //         {
// //             console.log("Fizzbuzz");
// //         }
// //         else
// //         {
// //             console.log(i);
// //         }

// //     }
// // }
// // number(19);

    

// // console.dir(document.getElementsByClassName("myclass"))

// // let newbtn = document.createElement("button");
// // newbtn.innertext = "click me";

// // newbtn.style.color = "blue";
// // newbtn.style.background = "red";
// // newbtn.style.boxSizing = 100 ;

// // document.querySelector("body").prepend(newbtn);
// // console.log(newbtn);

// function pyramid(n)
// {
//     for(let i=0;i<5;i++)
//     {
//         for(let j=0;j<=i;j++)
//         {
//                 process.stdout.write("* ");
//         }
//             console.log("\n");
//     }
// }
// pyramid(5);


// function pyramid(n)
// {
//     for(let i=0;i<=5;i++)
//     {
//         for(let j=0;j<=n-i;j++)
//         {
//             process.stdout.write("* ");
//         }
//             console.log("\n");
//     }
// }
// pyramid(5);

// function pyramid(n)
// {
//     let k = n;
//     for(let i=0;i<=n;i++)
//     {
//         for(let j=0;j<=n;j++)
//         {
//             if(j>=k)
//                {
//                     process.stdout.write(" * ");
//                }
//             else{
//                 process.stdout.write(" ");
//             }
//         }
//           k--;
//             console.log("\n");
//     }
   
// }
// pyramid(5);


// function pyramid(n)
// {
//     for(i=1;i<=n;i++)
//     {
//         for(j=1;j<=n;j++)
//         {
//             if(i===n||i===1||j===n||j===1)
//             {
//                 process.stdout.write("* ");
//             }
//             else{
//                 process.stdout.write("  ");
//             }
//         }
//         console.log();
//     }
// }
// pyramid(6)


// function pyramid(n)
// {
    
// function pyramid(n)
// {
//     let k = n;
//     for(let i=0;i<=n;i++)
//     {
//         for(let j=0;j<=n;j++)
//         {
//             if(j<=k)
//                {
//                     process.stdout.write(" * ");
//                }
//             else{
//                 process.stdout.write(" ");
//             }
//         }
//           k--;
//             console.log("\n");
//     }
   
// }
// pyramid(5);


// let mydiv = document.querySelector('#mydiv');

// let newelement = document.createElement('span');
// newelement.textContent = 'Aman Agarwal'

// mydiv.insertAdjacentElement("beforebegin",newelement);


// const value=document.getElementById("myclass")
// console.log(value)
// const value = document.getElementsByTagName('div')
// console.log(value)
// const value = document.querySelector("#myclass")
// console.log(value)
// function changetext()
// {
//     let vue = document.getElementById("d1");
//     vue.textContent = "you have"
// }

// let vue = document.getElementById("myclass");

// vue.removeEventListener('click',changetext);


// function changetext(){
//     let val = document.getElementById("d1");
//     val.textContent = "done"
// }
// let val = document.getElementById("d1");
// val.addEventListener('click',changetext);

// val.removeEventListener('click',changetext);

// let val = document.getElementById("d1");

// function delrow(){
//     let val = document.getElementById("d1");
//     val.deleteRow
// }

// function dolo1(){
//     alert("you really want to del")
//     document.getElementById("row1").remove();
// }

// function dolo2(){
//     alert("you really want to del")
//      document.getElementById("row2").remove();
// }
// function dolo3(){
//     alert("you really want to del")
//     document.getElementById("row3").remove();
// }
// function dolo4(){
//     alert("you really want to del")
//     document.getElementById("row4").remove();
// }
// function dolo5(){
//     alert("you really want to del")
//     document.getElementById("row5").remove();
// }
// function dolo6(){
//     alert("you really want to del")
//     document.getElementById("row6").remove();
// }

// document.getElementById('myTableBody').addEventListener('click', function(event) {
//   if (event.target.classList.contains('edit-btn')) {
//     const row = event.target.closest('tr'); // Get the parent row
//     toggleEditMode(row);
//   }
// });

// function toggleEditMode(row) {
//   const dataCells = row.querySelectorAll('.data-cell');
//   const editButton = row.querySelector('.edit-btn');

//   if (editButton.textContent === 'edit') {
    
//     dataCells.forEach(cell => {
//       const currentValue = cell.textContent;
//       cell.innerHTML = `<input type="text" value="${currentValue}">`;
//     });
//     editButton.textContent = 'Save';
//   } else {

//     dataCells.forEach(cell => {
//       const input = cell.querySelector('input');
//       if (input) {
//         cell.textContent = input.value;
//       }
//     });
//     editButton.textContent = 'edit';
//   }
// }








