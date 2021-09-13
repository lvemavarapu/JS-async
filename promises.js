// const firstPromise = Promise.resolve("first promise fullfilled")
// console.log(firstPromise)
// firstPromise.then((value)=>{console.log(value.toUpperCase())})

// const badPromise = Promise.reject("sorry cannot be fullfilled")
// badPromise.then((value)=>{console.log(value.toUpperCase())})
// .catch((error)=>{console.error(error)})


// Example:

function capitalise(word){
    return new Promise((resolve, reject) =>{
        if(typeof word !== "string"){
            reject(new Error("word must be a string"))
        }else
        resolve(word[0].toUpperCase() + word.slice(1).toLowerCase())

    })
}
function checkLength(string){
    if(string.length >5){
        console.log(string + "...")

    }else{
        throw new Error("string length must be greater than 5")
    }
}
capitalise("new")
.then((data)=>{return(data)})
//.then((value)=>console.log(value +"***"))
.then(checkLength)
.catch(e=>{console.log("error:" +e.message)})
.finally(console.log("Promise execution completed"))
