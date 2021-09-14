// async function capitalise(word){
   
//         if(typeof word !== "string"){
//           throw  ("word must be a string")
//         }else
//         return word[0].toUpperCase() + word.slice(1).toLowerCase()
//     }

// capitalise("we learning async-await")
// .then(data =>console.log(data))

// async function showCity(){
//     console.log("Paris")
//     await setTimeout(() => {console.log(" Oslo")},2000)
// }
// console.log("London")

// showCity()

async function movieName(){
    let promise = new Promise((resolve, reject) =>{
        setTimeout(() =>resolve("Harry Potter"),2000)
    })
    let show = await promise
    alert(show)
}
movieName()