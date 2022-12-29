"use strict";
// console.log("hello world");
//************************************************** */
// var firstname="adivya";
// console.log(firstname);
// var lastname="jain";
// console.log(firstname+" "+lastname);
//**************************************************** */
//how to name variable 
//var 1value="adi"; invalid
//yo_yo valid     snake case writing 
//_yoyo valid 
//firstName         camel case writing 
//$yoyo valid 
//yoy$yo valid

// var adi=10;  
// console.log(adi**8);  power

// ********************************************
//let keyword instead of var keyoard*
// let is better so use let 

// *********************************************************
//  declare constant
// const pi=3.14;

// console.log(pi);

// **********************************************
// string indexing
// let firstname="adivya jain";
// console.log(firstname[3]);
// console.log(firstname.length);  
// **********************************************************
// let firstNAME="  adivya   jain  ";
// console.log(firstNAME.length);
// firstNAME=firstNAME.trim();
// console.log(firstNAME.length);
// console.log(firstNAME.toUpperCase());
// console.log(firstNAME.toLowerCase());
// console.log(firstNAME.slice(0,4)); dosent include last index
//console.log(firstNAME.slice(1)); string will start from 1 and goes to end
// ****************************************************************************************************
// console.log(typeof (22));

//add "" to convert number to string  M1
// let AGE=9
// AGE=string(age)   M-2
//add +  in front of string to convert it to number

// let name="adivya";
// let surname="jain";
// let fullname= name +" "+surname;
// console.log(fullname);
// ********************************************************************************************
// template string
// let age=19;
// let firstNAME="adivya jain";
// let aboutme="my name is " +firstNAME+ " my age is "+ age;
// console.log(aboutme);
// let aboutme=`my name is ${firstNAME} and my age is ${age}`; template string 
// console.log(aboutme);
// *********************************************************************************************
//undefined data type
// let adi
// console.log(typeof adi); undefined 
//null
// let adi=null;
// console.log(typeof adi); output is object this is javascript bug output should be null
//big int
// let my= BigInt(12);
// let adi=123n; //also big int representation
// console.log(my+adi)
//big int adds with only another big int
// **********************************************************************************
//boolean and expression operator
// let num1=7;
// let num2=7;
// console.log(num1>num2);//   >=   <=   <    > 

// console.log(num1==num2); // sees the value not the data type
// console.log(num1===num2);//sees thr value as well as data type
// console.log(num1!=num2);
// console.log(num1 !==num2); //data type check also

// **********************************************************************************************
// if()
// {
// console.log("hello world");
// }
// else{
// 
// }
// ****************************************************************************************************
// falsy values
// false     ""      null  undefined    0
// truthy values   anything
// ************************************************************************8888
//ternary operator
// let age=2;
// let drink=age<=5 ? "milk":"tea";
// console.log(drink);
// ***************************************************************************
// console.log(5||7);  &&    || 
// var x=prompt("message to be printed");
// console.log(x);

// switch(){
//     case 1:
//         console.log();
//         break;
//     case 2:
//         ....
// }
//while loop
// while()
// {

// }
// for(var i;i<=9;i++){}//i can be used outside the block
// for(let j;j<=9;j++){}//j cannot be used outside the block

//break and continue

// do{   }while()
// ***************************************************************************************************
//array declaration and indexing
// let fruits =["apple","mango","grapes"];
// console.log(fruits);
// let adi=[1,2,2.03, ,"addi",null,undefined];//index from 0
// console.log(adi); //type object
//console.log(Array.isArray(fruits));

//push
// fruits.push("banana") //insert at end
// console.log(fruits);

// pop
// fruits.pop(); //delete at end
// console.log(fruits);

// unshift
// fruits.unshift("cherry");//insert at begning
// console.log(fruits);

// shift
// fruits.shift();//deletion at begning
// console.log(fruits);
// ******************************************************************************************
// array is reference data type
//cloning array and concatenation of array
// let array1=["adi","jain"];
// let array2=array1.slice(0);
// let array2=[].concat(array1);

// let array2=[...array1];//spread operator
// *******************************************************************************************
// for loop in array
// use const for creating array 
// array using while loop

// *****************************************************************************************
// for of loop
// const fruits=["apple","banana","grapes"];
// for(let fruit of fruits){//gives each element
//     console.log(fruit); 
// }
// for(let fruit in fruits){//gives index
//     console.log(fruit); 

// }
// let [myvar1,myvar2,...newarray]=fruits;//destructing
// *************************************************************************************************
//how to create objects
//const person={name:"harshit",age:22};

//  const person={
//     name:"adivya",
//     age:19,
//     hobbies:["guitar","sleeping","listening music"]
//  }

// console.log(person);
//console.log(person.name);            console.log(person["name"]);
//console.log(person.hobbies);

//how to add key value pair
// person.gender="male";     person["gender"]="male";
// console.log(person);

// *******************************************************************************************

//differece between dot and bracket notation
// const key="email";
// const person={
//     name:"adi",
//     age:19,
//     "person hobbies":["sleeping","dancing","gtg"]
// }
// console.log(person["person hobbies"]);

// person[key]="adivyajain@gmail.com";
// console.log(person);
// how to iterate object
//for in loop
//object.keys


// const person={
//     name:"adi",
//     age:19,
//     "person hobbies":["sleeping","dancing","gtg"]
// }

// for(let key in person)
// {
//     console.log(person[key]);
// }

// console.log(typeof (Object.keys(person)));
// const val = Array.isArray((Object.keys(person)));
// console.log(val);

// for(let key of Object.keys(person)){
//     console.log(person[key]);
// }

// ********************************************************************************

// const key1="objkey1";
// const key2="objkey2";

// const value1="myvalue1";
// const value2="myvalue2";
// const obj={};
// obj[key1]=value1;
// obj[key2]=value2;
// console.log

//******************************************************************************* */

// spread operator  in array
// const aray1=[1,2,3];
// const array2=[5,6,2];
// const new1=[...array2,...aray1];
// console.log(new1);

// const newj=[..."134553242"];// will spread it like ["1","3","4"...."2"]
// console.log(newj);


//spread operator in objects

// const obj1={
//     key1:"value1",
//     key2:"value2",
// };
// const obj2={
//     key1:"value34",
//     key6:"ererefd",
// };

// const obj={...obj1,...obj2,key67:"value68"};
// console.log(obj);
// const newobj={..."abc"}; /// it will be spread it like 0:"a",1:"b",2:"c"
// .//or newobj={...["iteam1","iteam2"]};
// console.log(newobj);

// ************************************************************************************************

// object destructuring
// const band={
//     bandName:"rock  bandd",
//     famoussong:"heat waves",
//     year:1923,};

//     let{bandName,famoussong}=band;// by default key name is used as variable name to change it 
//  .   // let{bandName:var1,famoussong:var2}=band;

// console.log(var1);
// ********************************************************************************************************
//objects inside array
//very useful

// const users=[
//     {userID:1,firstName:"adi",gender:'male'},
//     {userID:2,firstName:"YOYOADI",gender:'male'},
//     {userID:3,firstName:"aditi",gender:'female'},
// ]

// for(let user of users)
// {
//     console.log(user.firstName);
// }
// ********************************************************************************************

//NESTED DESTRUCTURING
// const users=[
//     {userID:1,firstName:"adi",gender:'male'},
//     {userID:2,firstName:"YOYOADI",gender:'male'},
//     {userID:3,firstName:"aditi",gender:'female'},
// ]
// const [user1,user2,user3]=users;
// const [{firstName}, , {gender}]=users//default name
// const [{firstname:user1firstname},,{gender:user3gender}]=users;
// console.log(user1);
// console.log(firstName,gender);
// *****************************************************************************************************


// function
// function function_name()
// {

// }




// function sum(num1,num2)
// {
//    return num1+num2;
// }

// var x=prompt("enter one num")
// var y=prompt("enter one num")
// console.log(sum(x,y));





// .//function expression
// const function_name=function(){

// }
//************************************************************************************************** */
//arrow function
// const function_name=()=>{
//     console.log("happy birthday")
// }

// function_name()






// if arrow function has only one parameter then we can remove the parenthesis like
// const adi= age=>{
//     console.log("age is"+age);
// }




// if function has only one return line ,then it can be written as
// const even= num=> num%2===0;
// console.log(even(8))


// ****************************************************************************************************
//hoisting

//by using normal way of initializing of function 
// hello()                         //this will print hello world                line 368
// function hello ()
// {
//     console.log("hello world");
// }

// but

// by using arrow function  line 368 will not print hello world and will give error 

// 01.js:368 Uncaught ReferenceError: Cannot access 'hello' before initialization
// const hello=()=>{console.log("hello world")}

// this is known as hoisting
// **************************************************************************************************

//we can make function inside function

// function app()
// {
//     const sum=(x,y)=>{
//         console.log(x+y);
//     }
//     const hello=()=>{
//         console.log("hello world");
//     }

//     console.log("inside function");
//     hello();
//     sum(9,10);
// }


// app();
// **************************************************************************************************

// lexical scope
//  value ko function me dundega nahi mila toh uske parent function me dundega nahi mila toh...last  me gloabally dundega



// *****************************************************************************************************
//BLOCK SCOPE VS FUNCTION SCOPE
//let and const are block scope

// {
//     const firstname="adi";

// }
// {
//     const firstname="yoyo";
// }

//var is function scope 
// isko kahi se bi access kr sakte


// *****************************************************************************************************************
//default parameters

//old way
// function addtwo(a,b){
//     if(typeof b ==="underfined"){
//         b=0;
//     }
//     return a+b;
// }





//new way
// function addtwo(a,b=0)
// {
//     return a+b;
// }

// const ans=addtwo(4,5,6)
// console.log(ans);

// *****************************************************************************************************************
//rest parameters

// function myfun(a,b,...c)
// {
//     console.log(`value of a is ${a}`);
//     console.log(`value of b is ${b}`);
//     console.log(`value of c is ${c}`);
//     console.log(`value of a is ${a}`)
// }
// myfun(1,2,3,4,5,6,7)



// function addall(...numbers)
// {
//     var total=0;
//     for(let number of numbers)
//     {
//         total=total+number;
//     }
//     return total;
// }
// const ans=addall(2,3,4,5,3,4,5);
// console.log(ans)

// ********************************************************************************
//parameter destructuring

//object  and react me used  hota

// const person={
//     firstname:"adi",
//     gender:"male",
//     age:34

// }



// function printdetails(obj)
// {
//     console.log(obj.firstname);
//     console.log(obj.gender);
// }

// function printdetails({firstname,gender,age})
// {
//     console.log(firstname);
//     console.log(gender);
//     console.log(age);
// } 
//function overloading k time jo baad me aata vo execute hota unlike cpp


// printdetails(person);
// *****************************************************************************************************************


// higher order function


//callback function

// function myfun(a)// genreally a ki jagah callback use krte
// {
//     console.log(a);
//     a()

// }
// function myfun2()
// {
//     console.log("inside hu fun2 k")
// }

// myfun(myfun2)//will print whole fun2

// *********************************************************************************************************************

// function returinf function

// function myfun() {
//     function hello()
//     {
//         return "hello world"
//     }
//     return hello;


// }
// const ans=myfun();
// console.log(ans());

// ***********************************************************************************************************************
//important array methods
//foreach
//map
//filter
//reduce










// foreach

// const numbers=[4,2,5,8];

// function myfunc(number,index)
// {
//     console.log("index is",index);
//     console.log(number*2);
// }

// for(let i=0;i<numbers.length;i++)
// {
// myfunc(numbers[i],i); 
// }

// numbers.forEach(myfunc);//first argument will be number and second will be its index




// numbers.forEach(function(number)
// {
//     console.log(number*3);
// }
// )




// FOR EACH LOOP AND ARROW FUNCTION
// const adi=[{firstname:"yoyo1" , age:6},{firstname:"yoyo2" , age:7},{firstname:"yoyo3", age:8}];
// adi.forEach(user=>
// {
//     console.log(user.firstname);
// })

// **********************************************************************************************************
// map method
// const number=[3,4,5,6,7];

// const square=function(number){
//     return number*number;
// }

// console.log(number.map(square))


// **********************************************************************************************************
// filter method

// const number=[1,2,3,4,5,6];

// const evennumber=number.filter((number)=>{
//     return number%2===0;

// });
// console.log(evennumber)

//array k saare even numbers ka ek new array banjayega

// ***********************************************************************************************************
// reduce method
// const numbers =[1,2,3,4,5];
// const sum=numbers.reduce((accumulator,currentvalue)=>{
//     return accumulator+currentvalue;

// },100)//here we set starting value of accumulator  so now ans will be 115
//accumulator        currentvalue      return
//1                      2                3
// 3                     3                6
// 6                     4                10
// 10                    5                15

// console.log(sum);

// *****************************************************************************************************************
//sort 
//sorting is done on the basis of ascii number
//  const numbers=[1231,34,45,69,98];
// expected sorting will be [34,45,69,98,1231];
// lets see the result 
//  console.log(numbers.sort());
// [1231, 34, 45, 69, 98]     it sorted this array in following steps  1) it converted each element to string and then sorted on the basis of 1st element of the string





// const numbers=[1231,34,45,69,98];


// for lowTohigh

// numbers.sort((a,b)=>{
//     return a-b;
// })
// console.log(numbers);
// now the output we got is [34, 45, 69, 98, 1231]




// for highTolow

// numbers.sort((a,b)=>{
//     return b-a;
// })
// console.log(numbers);
// now the output we got is [1231, 98, 69, 45, 34]







// const products=[
//     {productId:1,productname:"p1",price:300},
//     {productId:2,productname:"p2",price:100},
//     {productId:3,productname:"p3",price:3000},
//     {productId:4,productname:"p4",price:1300},
//     {productId:5,productname:"p5",price:800}
// ]

// products.sort((a,b)=>{
//     return a.price-b.price;
// })

// console.log(products);

// output
// 0: {productId: 2, productname: 'p2', price: 100}
// 1: {productId: 1, productname: 'p1', price: 300}
// 2: {productId: 5, productname: 'p5', price: 800}
// 3: {productId: 4, productname: 'p4', price: 1300}
// 4: {productId: 3, productname: 'p3', price: 3000}
// length: 5
// [[Prototype]]: Array(0)


// ************************************************************************************************************


// find
// const animal=["giraffe","cat","dog","elephant"];


// const ans=animal.find((string)=>string.length===3);//it will return the first string with length = 3
// console.log(ans);

// output
// cat    


// let x=prompt("enter the user id");

// const users=[
//     {userid:1,username:"abhay",marks:56},
//     {userid:2,username:"abhishek",marks:46},
//     {userid:3,username:"adam",marks:66},
//     {userid:4,username:"adivya",marks:100},
//     {userid:5,username:"amey",marks:76}
// ]

// const ans=users.find((id)=>{
//     return id.userid===4;

// })
// console.log(ans);
// console.log(ans+ans);
// console.log(ans);
// console.log(ans);


//******************************************************************************************************* */
//every method
// const numbers=[2,4,5,8,10];
// function iseven(number)
// {
//     return number%2===0;

// }
// const ans = numbers.every(iseven);
// console.log(ans);

// return true only if all elements of the array satisfy the condition

// ********************************************************************************************************
//some method 


// const numbers=[3,5,8,11];
// const ans =numbers.some((numbers)=>numbers%2===0);
// console.log(ans);

//will give true when atleast one condition is true

// *****************************************************************************************************
// FILL METHOD

//VALUE, START ,END
// const  myarray =[1,2,3,4,5,6,7];
// myarray.fill(0,2,5);
// console.log(myarray); 
//output [1, 2, 0, 0, 0, 6, 7]


// **************************************************************************************************
//splice method

//start     delete      insert
// const items = ["iteam1","iteam2","iteam3"];
// items.splice(1,1);
// console.log(items);            output   (2) ['iteam1', 'iteam3']


// items.splice(1,0,"inserted iteam");
// console.log(items);                output    (3) ['iteam1', 'inserted iteam', 'iteam3']
// ****************************************************************************************************

// iterables
// jisme for of loop laga ssake like string and array
// object is not iterable
// const names="adivya";
// for(let name of names)
// {
//     console.log(name);
// }



// array like object ==>> jinke pass length propert hoti h aur 
// jinko hum index se access kr sakte h eg;-string

// *****************************************************************************************************
// sets (it is iterable);
//stores data
//sets also has its own properties
//no index based access
//order is not guaranted
//unique iteams only(no duplicate iteams allowed)
// const numbers=new Set([1,2,3]);
// numbers.add(1); 
// numbers.add(3);
// numbers.add(2);


// if(numbers.has(1))
// {
//     console.log(`1 is present`);
// }

// numbers.add(4);
// numbers.add(6)
// console.log(numbers);
// for(let number of numbers )
// {
//     console.log(number);//iterable 
// }
// *******************************************************************************************************
//map
//map is an iterable

//stores data in ordered fashion

//stores key value pair like objects
//duplicate keys not allowed
//different between maps and  objects

//objects  can only have string or symbol as key


//in maps u can use anything as key
// like array number string



// object literals
//key->string
//key->symbol
// const person={
//     firstname:"adivya",
//     age:7,
//     1:"one"
// }
// console.log(person.firstname)
// console.log(person["firstname"])


//key value pair
// const person=new Map()
// person.set("firstname","adivya");
// person.set("age",19)
// person.set(1,'one');
// person.set([1,2,3],"onetwothree");

// console.log(person);
// console.log(person.get(1));

// map se key value pair ko access

// for(let key of person.keys())
// {
//     console.log(key,typeof key)
// }












// for(let [key,value] of person)
// {
//     console.log(key);
// }

//will give array key value pair

// **********************************
// const person=new Map([['firstName','harshit'],['age',19]]);
// console.log(person);


//output      Map(2) {'firstName' => 'harshit', 'age' => 19}







// const person1={
//     id:18,
//     firstName:"adivya"
// }
// const extrainfo=new Map();
// extrainfo.set(person1,{age:34,gender:"male"});


// console.log(person1.id);
// OUTPUT     18
// console.log(extrainfo.get(person1).age);
//OUTPUT           34


// console.log(extrainfo.get(person1).gender);
//output    male






//obj1={something}
//obj2=obj1;
//agar cloneing kr rahe ho and after clonong ,,,ek obj me change krne par dusre me cahnge nahi chaiye toh spread operator use krte h

// const obj2=Object.assign({},obj);
//const obj2={...obj}; 
// ************************************************************************************************************************************************************************************************************************************
//optional chaining

// const user={
//     firstName:"adivya",
//     address:{houseNumber:'1234'}
// }

// console.log(user.firstName);
// console.log(user.address.houseNumber);
//output        adivya         1234




// const user={firstName:"adivya",
// address:{houseNumber:'1234'}

// }
// console.log(user?.firstName);
// console.log(user?.address?.houseNumber);

//output adivya
//       undefined




// **********************************************************************************************************************************************************

// methods are function inside object

// const person={
//     firstname:"adii ",
//     age:8,
//     about:function()
//     {
//         console.log(`person name is ${this.firstname} and person age is ${this.age}`);

//     }
// }
//     person.about();
//this ki jagah person likhdo           this is how 'this' works


// **************************************************************************************************************************************************************************

//call  apply    bind


// const user1={
//     firstname:"adivya",
//     age:8,
//     about:function()
//     {console.log(this.firstname,this.age)
// }}


// const user2={
//     firstname:"aditi",
//     age:21
// }
// user1.about.call(user2);
//call k parenentesis me hum   `this`  ki value likhte h

//output            aditi 21




// const user1={
//     firstname:"adivya",
//     age:8,
//     about:function(hobby,favmusician)
//     {console.log(this.firstname,this.age,hobby,favmusician)
// }}


// const user2={
//     firstname:"aditi",
//     age:21
// }
// user1.about.call(user2,"guitar","arjit singh");
//output        aditi 21 guitar arjit singh





// *****************************************************************************************
// apply



// function about(hobby, favmusicican)
// {
//     console.log(this.firstname,this.age,hobby,favmusicican)
// }

// const user1 = {
//     firstname: "adivya",
//     age: 8,

// }

// const user2 = {
//     firstname: "aditi",
//     age: 21
// }

// about.apply(user1,["guitar","arjit singh"])

// output       adivya 8 guitar arjit singh

//apply me hum saare parameters ek array banakr bejdete baki sab same h call ki tarah
// ********************************************************************************************************************************************
// bind

// bind ek function return krta h    future me hum kabi bi function call kr sakte h

// const func=about.bind(user2,"guitar","arjit");
// func();
// ******************************************************************************************************************************************************





//arrow function ka this nahi hota






// const user1={
//     firstname:"adivya",
//     age:8,
// about:function(hobby,favmusician)//method 1
// or we can directly Write method 2
//     about()
//     {console.log(this.firstname,this.age,hobby,favmusician)
// }}


// ********************************************************************************************************************************************************************
//function(that function creaate objects)
// 2) add key value pair
// 3) object ko return krega 


// function createuser(firstname, lastname, email, age, adress) {
//     const user = {};
//     user.firstname = firstname;
//     user.lastname = lastname;
//     user.email = email;
//     user.age = age;
//     user.adress = adress;
//     user.about = function () {
//         return `${this.firstname} is ${this.age}`
//     };
//     user.is18 = function () {
//         return this.age >= 18;

//     }
//     return user;

// }
// const user1 = createuser("adi", "jain", "adafdfws@", 19, "jabalpur");
// console.log(user1);
// console.log(user1.is18());

//output
// {firstname: 'adi', lastname: 'jain', email: 'adafdfws@', age: 19, adress: 'jabalpur', …}
// true




//we can make a seperate object for funtion only so that  we dont need to make the function many times just take the reference


// *************************************************************************************************************************************************************************
// const obj1={
//     k1:"k1value",
//     k2:"k2value"
// }
//another way to crete empty object
// const obj2=Object.create(obj1);
// obj2.k3="value3";
// console.log(obj2.k2);//output   k2value


//object.create use krne se agar koi key obj2 me nahi milti toh fir vo key obj1 me dundi jati h
// obj1 k key valye pair ,obj2 ka __proto__ or [[prototupe]] h

// ************************************************************************************************************************************************************

// const usermethods={
//     about:function()
//     {
//         return `${this.firstname} is ${this.age} years old`

//     },
//     is18: function()
//     {
//         return this.age>=18;
//     },
//     sing:function(){}
// }

// function createuser(firstname, lastname, email, age, adress) {
//     const user = Object.create(usermethods);
//     user.firstname = firstname;
//     user.lastname = lastname;
//     user.email = email;
//     user.age = age;
//     user.adress = adress;
//     user.about = function () {
//         return `${this.firstname} is ${this.age}`
//     };
//     user.is18 = function () {
//         return this.age >= 18;

//     }
//     return user;

// }
// const user1 = createuser("adi", "jain", "adafdfws@", 19, "jabalpur");
// console.log(user1);
// console.log(user1.is18());

//output {firstname: 'adi', lastname: 'jain', email: 'adafdfws@', age: 19, adress: 'jabalpur', …}
// true

// **************************************************************************************************************************************************************************************

// prototype

// function hello()
// {
//     console.log("hello world");

// }
//javascript function===>function+ object

//you can add your own properties
//hello.myownproperty="very unique person"

//console.log(hello.myownproperty)

//name property------------>tells the function name
//console.log(hello.name);


//function provides more useful properties.

//console.log(hello.prototype);//{}

//only function provides prototype property



// hello.prototype.abc="abc";
// hello.prototype.zxc="zxc";


// **************************************************************************************************************************************************************

//construtor function as it construsts object
// function createuser(firstname, lastname, email, age, adress) {
//     const user = Object.create(createuser.prototype);
//     user.firstname = firstname;
//     user.lastname = lastname;
//     user.email = email;
//     user.age = age;
//     user.adress = adress;
//     user.about = function () {
//         return `${this.firstname} is ${this.age}`
//     };
//     user.is18 = function () {
//         return this.age >= 18;

//     }
//     return user;

// }


// createuser.prototype.about = function () {
//     return `${this.firstname} is ${this.age} years old`

// }
// createuser.prototype.is18=function () {
//     return this.age >= 18;
// }
// const user1 = createuser("adi", "jain", "adafdfws@", 19, "jabalpur");
// console.log(user1);
// console.log(user1.is18());



// ***********************************************************************************************************************************************



//new keyword
// function createuser(firstname,age)
// {
//     this.firstname=firstname;
//     this.age=age;
// }
// createuser.prototype.about=function()
// {
//     console.log(this.firstname,this.age);
// }
// const user1=new createuser("adi",19);

//new keyword
//1) empty object this={}
//2) return this

// user1.about();//adi  19


// ***********************************************************************************************************************************************************

// __proto__ 
//official ecmascript document
// [[prototype]] 




// function Createuser(firstname, lastname, email, age, adress) {
//     const user = {};
//     user.firstname = firstname;
//     user.lastname = lastname;
//     user.email = email;
//     user.age = age;
//     user.adress = adress;
   
//     user.is18 = function () {
//         return this.age >= 18;

//     }
//     return user;

// }

// Createuser.prototype.about=function()
// {
//     return `${this.firstname} is ${this.age}`
// }
// Createuser.prototype.about=function()
// {
    
// }
// const user1 = new Createuser("adi", "jain", "aTRdafdfws@", 19, "jabalpur");
// const user2 = new Createuser("adiTY", "jain", "adERTafdfws@", 199, "jabalpur");
// const user3 = new Createuser("adiVY", "jain", "adafdfws@", 189, "jabalpur");


// for(let key in user1)
// {
//     // console.log(key);
//     if(user1.hasOwnProperty)
//     {
//         console.log(key);
//     }
// }


// *******************************************************************************************************************************************************************************************************
// let number=[1,2,3];//internally ye bi new keyword se banta h
// console.log(Object.getPrototypeOf(number));
//output
// Array(0)
// at: ƒ at()
// concat: ƒ concat()
// constructor: ƒ Array()
// copyWithin: ƒ copyWithin()
// entries: ƒ entries()
// every: ƒ every()
// fill: ƒ fill()
// filter: ƒ filter()
// find: ƒ find()
// findIndex: ƒ findIndex()
// findLast: ƒ findLast()
// findLastIndex: ƒ findLastIndex()
// flat: ƒ flat()
// flatMap: ƒ flatMap()
// forEach: ƒ forEach()
// includes: ƒ includes()
// indexOf: ƒ indexOf()
// join: ƒ join()
// keys: ƒ keys()
// lastIndexOf: ƒ lastIndexOf()
// length: 0
// map: ƒ map()
// pop: ƒ pop()
// push: ƒ push()
// reduce: ƒ reduce()
// reduceRight: ƒ reduceRight()
// reverse: ƒ reverse()
// shift: ƒ shift()
// slice: ƒ slice()
// some: ƒ some()
// sort: ƒ sort()
// splice: ƒ splice()
// toLocaleString: ƒ toLocaleString()
// toString: ƒ toString()
// unshift: ƒ unshift()
// values: ƒ values()
// Symbol(Symbol.iterator): ƒ values()
// Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}
// [[Prototype]]: Object



// ************************************************************************************************************************************************************************************************************************

//class
// class createuser{
//     constructor(fn,ln,email,age,addre)
//     {
//         this.fn=fn;
//         this.ln=ln;
//         this.email=email;
//         this.age=age;
//         this.addre=addre;

//     }

//     about()
//     {
//         return "hello"
//     }
//     is18()
//     {
//         return this.age>=18;
//     }
//     sing()
//     {
//         return "jienf nfir jnr"
//     }

// }

// const user1=new createuser("adi","jain","adsd",12,"sdfd")
// const user2=new createuser("adisd","jdsain","sdadsd",212,"sxsdfd")
//new lagana compulsary h


// ******************************************************************************************************************************




// class animal{

// }
// class dog extends animal{

// }


//object------------>instance


// super(,);
// ***********************************************************************************************************************************************



// getters and setters
//static


//FOR GENERATING RANDOM NUMBERS
var b=Math.random();
b=b*10;
b=Math.floor(b);
console.log(b);
