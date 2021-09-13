
// const wait = (ms) =>{
//     let start = Date.now(); //initialising start current time
//     let now = start; //initialising now with start value
//     while (now - start < ms){
//         now = Date.now() //update now's value with the "new current time"
//     }
// }

// console.log("hello world!")
// // wait(6000)
// setTimeout(()=>console.log("Brisbane"),0)
// console.log("Coder Academy")
// console.log("Coder Academy")
// console.log("Coder Academy")
// console.log("Coder Academy")

//Stack : LIFO
//output 1



function a(){
    return 1
}
function b(){
    a()
}
function c(){
    b()
}
c()

//Queue: FIFO 