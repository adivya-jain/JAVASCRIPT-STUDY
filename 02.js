// Javascript 
// sync programming
// console.log("script start")
// for(let i=0;i<100;i++){
//     console.log("inside the loop")
// }
// console.log("script end");

// javascript is syncronous programming single threaded->one program at a time

// setTimeout
// console.log("script start")
// setTimeout(()=>{
//     console.log("inside setTimeout")
// },0)
// for(let i=1;i<10;i++)
// {
//     console.log(".....acchaaaa?")

// }
// console.log("script end")
// output of above code
// script start
// .....acchaaaa? X 99 times
//script end
//inside setTimeout (even when timeout is of 0 second)

// clearTimeout(id) // removes the id of timeout passed
// similarly clearInterval(id)
// **********************************************************************************************************
// CALLBACK
// function getTwoNumAndAdd(num1,num2,onSuccess,onFailure)
// {
//     if(typeof num1 === "number" && typeof num2 === "number")
//     {
//         onSuccess(num1,num2)
//     }
//     else{
//         onFailure()
//     }
// }
// function add(num1,num2)
// {
//     console.log(num1+num2);
// }
// function onFailure()
// {
//     console.log("Wrong daata types")
// }

// getTwoNumAndAdd(4,"5",add,onFailure)

//Call back hell or pyramid of doom
// setTimeout(()=>{console.log("bla bla")
//     console.log("accha ji")
//     setTimeout(()=>{
//         console.log("bla bla 2")
//         setTimeout(()=>{
//             console.log("bla bla 3")
//             setTimeout(()=>{
//                 console.log("bla bla 4")
//                 setTimeout(()=>{
//                     console.log("bla bla 5")
//                     setTimeout(()=>{
//                         console.log("bla bla 6")
//                     },2000)
//                 },2000)                
//             },2000)
//         },1000)
//     },2000)
// },1000)

// thats why promise is used, .then .catch