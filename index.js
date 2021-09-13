let cityP = document.querySelector(".city")
let nickNameP = document.querySelector(".nickName")
let cityButton = document.getElementById('showCity')
let nickNameButton = document.getElementById("shownickName")

cityButton.addEventListener('click', ()=>{
    if (cityP.style.display == 'none'){
        cityButton.innerText = "Hide city"
        cityP.style.display = 'block'
    } else{
        cityButton.innerText = "Show city"
        cityP.style.display = 'none'
    }
})

// const wait = (ms) =>{
//     let start = Date.now(); //initialising start current time
//     let now = start; //initialising now with start value
//     while (now - start < ms){
//         now = Date.now() //update now's value with the "new current time"
//     }
// }

nickNameButton.addEventListener('click', ()=>{
    //wait(5000)
    setTimeout(()=>{
        if (nickNameP.style.display == 'none'){
            nickNameButton.innerText = "Hide nickName"
            nickNameP.style.display = 'block'
        } else{
           nickNameButton.innerText = "Show nickName"
           nickNameP.style.display = 'none'
        }
  
},8000)
})

