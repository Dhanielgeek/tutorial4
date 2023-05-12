//arithemetic operator
// //addidtion operator
//  let a = 4;
//  let b = 5;
//  console.log(a+=b)
//  //substration operator
//  let x = true;
//  let y = 5;
//  console.log(true+5)

const PromptSync = require("prompt-sync")

// //modulus or remender %
// let e = 12
// let f = 2
// console.log(30%5)

//addition assigenment operator  +=

//  let g = 5
//  g += 4
// console.log(g)

//tenary operator// expression ? statement 1 is true while statement 2 is false
//syntax fo tenary opreator expression ? statement 1 : statement 2
// function getFree(isMember){
//     return (isMember ? "$2.00" : "$10.00")
// }
// console.log(getFree(""))
///
//const age = 25
//const bevarge= age >= 40 ? "beer":"juice";
//console.log(bevarge)//

// let greeting = (person)=>{
//     let name = person ? person.sex : "stargirl"
//     return `howdy ${name}`
// }
// console.log(greeting({sex:"male"}))




//myArry= ["asdf","sd","something","right",'position']

  //let mynewArry=myArry.reduce((previous, current)=>{
//return current.length > previous.length ? current : previous
//})
//console.log(mynewArry)















// myArry= ["asdf","sd","something","right",'position']
// let newArry = myArry.reduce((wa,da)=>{
//   return  wa.length > da.length ? wa : da
// })
// console.log(newArry)












// let arRay=[NaN,0, 15,false,-22,"",undefined,47,null,94]
// let newarr = arRay.filter((el)=>{
//  return el!= false && el!=undefined && !isNaN(el)
// })
// console.log(newarr)




// let art = [1,3,6,2,5,10];
// let result =[0,0]

// let newResult = art.map((el,i)=>{
//   console.log(i%2? result[1] += art[i] : result[0]+= art[i])
// })
// console.log(result)

// console.log(2%2)


// //object
// let car ={
//   name:"benz",
//   color:"red",
//   door:4,
//   gear:[1,2,3,4,5],
//   wheel:6
// }
// console.log(car.gear[3])
// console.log(car)

// let allStudent=[
//   {
//     name:"edwin",
//     stack:"mern",
//   },
//   {
//     name:"daniel",
//     stack:"backend",
//   },
//   {
//     name:"oche",
//     stack:"full-stack",
//   }
// ]
// console.log(allStudent[1].name)
// console.log(allStudent[2].stack)

// //condition  synatx
// let isAdmin = false;
// if(!isAdmin){
//   console.log("welcome admin")
// }else{
//   console.log("you're not admin")
// }

// let age = 20
// if(age < 18){
// console.log("you are under age")
// }else if(age>18){
//   console.log("you are qualifiled")
// }else if(age===30){
//   console.log("keep working hard")
// // }else{
//   console.log("what are you doing with your life")
// }




// //how to use prompt sync
 

// let userName= prom("Username?")

// console.log(`welcome ${userName} nice meeting you`)

// let time= Number(prom("what time is it?"))
// console.log(typeof time)

// if(time === 8 || time < 12){
// console.log("GOOD MORNING" + " "+ userName)
// }else if(time === 12 || time < 16){
//   console.log("GOOD AFTERNOON" + " "+ userName)
// }else if(time === 16 || time < 21){
//   console.log("GOOD EVENING" +" " + userName)
// }else{
  //if(/[a/-z]/i.test(time)===true){
   // console.log("not a vaild number!!")
 // }
//   console.log("you shoukd be sleeping" + " "+ userName)
// }
// console.log("test my nodemon"+ userName)
//NPM NODE PACKAGE MANAGER
//depe


 const prom = require("prompt-sync")();

// const studNames = prom("What is your name?")

// const ajTechies =["daniel","oche","david","grace","tina","kcee","ayo","sheriff","okus","dammy","frances","obi"]

// const stackRole = ["frontend","backend","fullstack","mern"]

//  if (ajTechies.includes(studNames) === true){
//   console.log(`Welcome ${studNames}`)
//   const age = prom(`HOW ARE OLD ARE YOU ${studNames}?  `)
// if(age>=18){

//   console.log(`You're welcome ${studNames}`)
//   const stack = prom(`What's your stack ${studNames}?  `)
// if (stackRole.includes(stack)=== true){
//   console.log(`Resitration complete!!${studNames}`)
// }else{
//   console.log("Not Found")
// }
// }else{
//   console.log(`This is not your playground ${studNames}`)
// }
// }else{
//   console.log("Access Denied!!")
// }
//SWITH condition syntax

// let gymDays = "thrus"
// switch("tue"){
//   case "mon":
//     console.log("gym start by 9am")
//     break;
//     case "tue":
//       console.log("gym start by 10am")
//       break;
//       case "wed":
//         console.log("gym start by 10:30am")
//         break;
//         default:
//           console.log("no gym today")
// }

// const rectan = prom("what is your length?")

// if (isNaN(rectan)===false){
//   const value = prom("what is your breadth ?")
//   if(isNaN(value)===false){
//     console.log("this is a square")
//   }else{
//     console.log("this not a number")
//   }
// }else{
//   console.log("not a number")
// }

// const marks= prom("what is your score?")

//if(isNaN===true){
//   console.log("your score is not on the score board")
// }else if(marks===25 || marks<=45){
//   console.log("your score is E")
// }else if(marks===45|| marks<=50){
//   console.log("your score is D")
// }else if(marks===50||marks<=60){
//   console.log("your score is C")
// }else if(marks===60||marks<=80){
//   console.log("your score is B")
// }else if(marks >80 || marks===80){
//   console.log("your score is A")
// }else{
//   console.log("your score is on the score board")
// }


// switch(prom("what num of month is it and how many days does it has?")){
//   case "1":
//     console.log({
//       month: "january",
//       Days: 31,
//     })
//     break;
//     case "2":
//       console.log({
//         month: "Febuary",
//         Days: 28,
//       })
//       break;
//       case "3":
//         console.log({
//           month: 'March',
//           Days: 31,
//         })
//         break;
//       case "4":
//         console.log({
//           month:'april',
//           Days: 30,
//         })
//         default:
//           console.log("Not Availble!!")
// }
// switch(prom("is ?")){
// case "A":
//   console.log("A is vowel")
//   break;
//   case "E":
//     console.log("E is vowel")
//     break;
//     case "I":
//       console.log("I is vowel")
//       break;
//       case 'O':
//         console.log("O is vowel")
//         break;
//         case "U":
//           console.log("U is vowel")
//           break;
//           default:
//             console.log(`${prom} is a consontant`)
//             break;
//       }
      // const itemPurchased=prom("Total of item purchased?")
      // if(isNaN(itemPurchased)===true){
      //   console.log("not a vaild number")
      // }else{
      //   if(itemPurchased < 10){
      //     console.log(`your item purchase is ${itemPurchased * 100}`)
      //   }else if(itemPurchased >= 10){
      //     console.log(`you have a 10% discount so your price is  ${itemPurchased * 100 - itemPurchased*100 * 10/100}`)
      //   }
      // }

      // const Nums = prom("input your Number ?")
      // switch(Nums % 2){
      //   case 0:
      //     console.log(`${Nums}  is an even number`)
      //     break;
      //     case 1:
      //       console.log(`${Nums} is an odd number `)
      //       break;
      //       defaul
      //         console.log("not a number")

      // }
      // const stuDent={
      //   name:"David ray",
      //   class:"VI",
      //   rollno: 12
      // };
      // let keys = Object.keys(stuDent)
      // console.log(keys)
      // let leg = Object.keys(stuDent).length
      // console.log(leg)


    //loop 
    //synatax 
    // for(let i=0; i< 15; i++){
    //   if (i % 2 === 0){
    //     console.log(i)
    //   }
//     //

// const evie = (b)=>{
//   for(let i = 0; i < b; i++){
//   if(i % 2===0){
//     console.log(i)
//   }
//   }
// }
// evie(40)


//  let arrv = ["daniel","david","oche","okon"]
//  for(let i = 0; i < arrv.length; i++){
//   console.log(arrv[i])
//  }


// let userUnit = Number(prom("whats your unit price ?"))
// let Myuser = userUnit * 100
// console.log(Myuser)
// if (Myuser < 1000){
//   console.log(`no discount your price is ${Myuser}`)
// }else{
//   let result =Myuser - (userUnit * 10/100)
//   console.log(`Hurayy!!! your  10% discount is ${result}`)
// }



//   const evenNumber=(a)=>{
//     for (let i = 0;i < a; i++)
//     if (i % 2===0){
//      console.log(i)
//     }
//   }
//   evenNumber(20)
  





// const oddNumber= (b)=>{
//   for(let i = 0; i<b ; i++)
//   if(i%2){
//     console.log(i)
//   }
// }
// oddNumber(30)
  
// let arr = ["jude","david","francis","madabuchi"]
// for (let i =0; i < arr.length; i++){
//   console.log(arr[i])
// }
//   let numBers = [1,4,7,8,9]
// let num2 = []
// for (let i = 0; i<numBers.length; i++){
//   // console.log(numBers[i]* 5)
//   num2.push(numBers[i]*5)
// }
// console.log(num2)

//let numBers = [1,4,7,8,9]
//let num2 = []
//for (let i = 0; i<numBers.length; i++){
  // console.log(numBers[i]* 5)
  //                num2.push(numBers[i]*5)
//}



// let numbbies = [1,5,8,7,9,3]
// let numbo = []
// for (let i = 0; i <numbbies.length; i++){
//   numbo.push(numbbies[i]* 5)
// }
// console.log(numbo)



//console.log(num2)

// const myString = (a)=>{
// let arrMy = a.split(",")
// let dNew = []
// for (let i= 0; i <arrMy.length; i++){
//   if(i % 2===0){
//     dNew.push(Number(arrMy[i])* 5)
//   }else if(i % 2===0){
//     dNew.push(Number(arrMy[i])* 5)
//   }
// }
// console.log(dNew)
// }
// myString("2,4,5,7,12")

// const stuDentData = [
//   {
//   name : "daniel",
//   age : 23,
// },
// {
//     name : "david",
//     age : 17,
// },
// {
//   name : "oche",
//   age : 20,
// },
// {
//   name : "francies",
//   age : 18,
// },
// {
//   name : "obi",
//   age : 25,
// },
// {
//   name : "kcee",
//   age : 16,
// },
// {
//    name: "tina",
//    age : 27,
// },
// {
//   name : "grace",
//   age : 22,
// },
// {
//   name : "dammy",
//   age : 20,
// },
// {
//   name : "ayo",
//   age : 16,
// }
// ]
// const above18  = []
// const low18 =[]
// for(let i = 0; i < stuDentData.length; i++){
//   if(stuDentData[i].age > 18){
//     above18.push(stuDentData[i])
//   }else if(stuDentData[i].age < 18){
//     low18.push(stuDentData[i])
//   }
// }
// console.log(above18)
// console.log(low18)
//syntax for decreement
// for(let i = 5; i >0 ; i--){
//   console.log(i)
// }

    // while loop syntax 
    //while (condition) {
      
    //}
    //let i = 10; 
    //while (i > 0) {
     // console.log(i)
      //i--
   // }

    // do while loop syntax
    // let i = 10;
    // do {
    //     console.log(i);
    //     i--
    //  } while (i > 0);
// for in loop is used for iterating through an object or array but best practice is for an object
// syntax for in loop
// let person ={
// name: " daniel",
// color: "lightskin",
// age: 23,
// height: 6.1
// }
// let colo =" "
// for (let i in person){
//   colo += person[i] + ","
// }
// console.log(colo)

//for loop in array 
// const numbi = [6,12,10,3,9,8]
// const multa = " "
// for(let i in numbi){
//   multa + numbi[i] + "<br>"
// }
// console.log(multa)


//break 
// for (let i = 0; i < 5; i++){
//   if(i ===3){
//     break;
//   }
//   console.log(i)
// }

// for(let i = 0; i < 5 ; i++){
//   if(i===3){
//     continue
//   }
//   console.log(i)
// }

//let strINg = "Searching for my charm";
// let use = "a"
// for(i = 0 ; i < strINg.length; i ++){
//  if(strINg[i] === use){
//     console.log(`${use} is on position ${i}`)
//     break;
//   }else if(strINg[i]!= use){
//     console.log("No")
//     break;
//   }
// }

// const check = (strINg, userSearch)=>{
//   for(i = 0 ; i < strINg.length; i ++){
//     if(strINg[i] === userSearch){
//        console.log( ` yes ${strINg} is found the words`)
//        break;
//      }
//     }
// }

// check("Searching for my charm", "y")

// let  wordHack = "javascript is cool"
// for(let i = 0; i < wordHack.length; i++){
//   if(wordHack[i]==="a"){
//     wordHack = wordHack.replaceAll("a",4)
//     wordHack = wordHack.replaceAll("i",1)
//     wordHack = wordHack.replaceAll("e",3)
//     wordHack = wordHack.replaceAll("o",0)
//     wordHack = wordHack.replaceAll("s",5)
//   }
// }
// console.log(wordHack)

// let otherWord = "optimism is the faith that leads to achievment. Nothing can be done without hope and confidence"
// for (let i = 0; i < otherWord.length; i++){
//   switch (otherWord[i]){
//     case "a":
//     otherWord = otherWord.replaceAll("a",4)
//     otherWord = otherWord.replaceAll("e",3)
//     otherWord = otherWord.replaceAll("o",7)
//     otherWord = otherWord.replaceAll("s",5)
//   }
// }
// console.log(otherWord)

// //nested loop 
// for(let i = 0; i < 5 ; i++){
//   console.log(i)
//   for(let j = 0; j < 8; j++){
//     console.log("   ",j)
//   }
// }


 let senteEnce = "Good, better, best. Never let it rest. 'Til your good is better and your better is best."
 let vowCount = 0
for(let i = 0; i<senteEnce.length; i++){
  if(senteEnce.charAt(i)=="a"|| senteEnce.charAt(i)=="e"|| senteEnce.charAt(i)=="i"|| senteEnce.charAt(i)=="o"|| senteEnce.charAt(i)=="u"){
     vowCount += 1
  }
  
 }
 console.log(vowCount)


let word = "The Quick Brown Fox"
let lowerCase = "a,b,c,d,e,f,g,h,i,j,k,m,n,o,p,q,r,s,t,u,v,w,x,y,z"
let upperCase = "A,B,C,D,E,F,G,H,I,J,K,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"
let othher = []
for(let i = 0; i < word.length; i++){
  if(upperCase.indexOf(word[i])>1){
     othher.push(word[i].toLowerCase())
  }else if(lowerCase.indexOf(word[i]>1)){
    othher.push(word[i].toUpperCase())
  }else{
    othher.push(word[i])
  }
}
console.log(othher.join(""))

// let numbErs = [1,2,3,4,5,6,7,8,9,10]
// for(let i = 0; i < numbErs.length; i++){
//   if( i % 2 ){
//     console.log(`${numbErs[i]} is an even number`)
//   }else if(i % 2=== 0){
//     console.log(`${numbErs[i]} is an odd number`)
//   }
// }

// for(let i = 5; i >0 ; i--){
//   console.log(i)
// }

 let wordEven = "There is exactly one space between each word and no punctuation is used."
 let newEven = wordEven.split(" ")
//  console.log(newEven)
//  let oddWord = newEven.length % 2 === 0
 for(let i = 0; i < newEven.length; i++){
  if(newEven[i].length % 2 === 1){
    // let theOther = newEven[i].reverse()
    newEven[i] = newEven[i].split("").reverse().join('')
  }
 }
console.log(newEven.join(' '))




  


