
// function palindrome(string)
// {
    
//     for(let i=0;i<string.length;i++)
//     {
//         if(string[i]!==string[string.length-i-1])
//         {
//             return false       
//         }
//     }
//     return true
    
// }

// let a = palindrome("mama");
// console.log(a);

// function palindrome(word,i)
// {
//     if(word[i]!==word[word.length-i-1])
//     {
//         return false;
//     }
//     if(i===word.length-1)
//     {
//         return true;
//     }
//    return  palindrome(word,i+1);
// }
// let a = palindrome("naman",0)
// console.log(a);

// function anagrams(word1,word2)
// {
//     for(let i=0;i<word1.length;i++)
//     {
//         for(let j=0;j<word2.length;j++)
//         {
//             if(word1[i]===word2[j])
//                 {
//                     flag=true;
                    
//                 }
//         }
//         if(flag===false)
//         {
//             return false;
//         }
//         if(word2.length===0)
//         {
//             return true
//         }
//     }
// }
// let a = anagrams("naman" , "amann" )
// console.log(a);

// function anagrams(word1,word2)
// {
//     if(word1.length!==word2.length)
//     {
//         return false;
//     }
//     let chare1=word1.split('');
//     let char2=word2.split(''); 
//     chare1.sort();
//     char2.sort();
//     for(let i=0;i<word1.length;i++)
//     {   
//         if(char2[i]!==chare1[i])
//         {
//             return false;
//         }
//     }
//     return true;
// }
// let a = anagrams("amann","naman");
// console.log(a);

// let vtr = "hello #whatts up";
// console.log(vtr.slice(0,4));
// let ztr = " its good";
// let str = vtr.concat(ztr);
// console.log(str)
// let newt = str.substring(1,4);
// console.log(newt);
// console.log(newt.toUpperCase());
// console.log(newt.toLowerCase());

// let vtr = "hello * worldd";

// //Accesing characters
// console.log(vtr.charAt(3)); //charat()

// console.log(vtr[8]); //indexing
// console.log(vtr.codePointAt(3));

// //Extracting Substring
// console.log(vtr.slice(1,4));
// console.log(vtr.substring(2,7));
// console.log(vtr.substr(2,4));

// //Searching,Matching & Checking
// console.log(vtr.indexOf('d'));
// console.log(vtr.includes("hello"));
// console.log(vtr.search("w"));

// //Case & Whitespace MAnipulation
// console.log(vtr.toUpperCase());
// console.log(vtr.trim());

// //Splitting and concatenation
// console.log(vtr.split("*"));
// console.log(vtr.concat(" This is me"));

// //For of
// const myArray = [10, 20, 30];
//     for (const into of myArray) {
//         console.log(into); // Outputs: 10, 20, 30
//     }

// //for of
// const myObject = { a: 1, b: 2, c: 3 };
//     for (const key in myObject) {
//         console.log(key); // Outputs: "a", "b", "c"
//     }
//     delete myObject['a'];
//     myObject.d=4;
    
//     console.log(myObject);



// function databass()
// {
//     let arr = [];

//     for(let i =0 ; i<5;i++)
//         {
//             let newobject = {id:i,Name: `aman ${i}`,email:`aman${i}@gmail.com`};
//             arr.push(newobject);           
//         }
//         return arr;
// }
// const aman= databass();
// console.log(aman);


// function add()
// {
//     let a = 10;
//     let b = 15;
//     return(a+b);

// }
// let c = add();
// console.log(a);

// function multi()
// {
//     let a = 10;
//     let b = 15;
//     return(a*b);

// }
// let c = multi();
// console.log(c);

// function div()
// {
//     let a = 10;
//     let b = 15;
//     return(a/b);

// }
// let c = div();
// console.log(c);

// function expo()
// {
//     let a = 10;
//     let b = 15;
//     return(a**b);

// }
// let c = expo();
// console.log(c);

// function and()
// {
//     let a = 10;
//     let b = 15;
//     let c = 15;
//     if(a===b&&b===c)
//     {
//         return true;
//     }
//     else 
//     {
//         return false
//     }

// }
// let d = and();
// console.log(d);

// function or()
// {
//     let a = 10;
//     let b = 15;
//     let c = 15;
//     if(a===b||b===c)
//     {
//         return true;
//     }
//     else 
//     {
//         return false
//     }
// }

// let d = or();
// console.log(d);



// const car = {type:"Fiat", model:"500", color:"white"};
// console.log(car.type);

// car.run = "50000";
// console.log(car.run);

// let x = 2

// flag = x%2===0?"even":"odd";
// console.log(flag);



