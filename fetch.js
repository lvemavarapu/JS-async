// $.ajax({
//     url: 'https://randomuser.me/api/?results=5',
//     dataType: 'json',
//     success: (response) => {printUsers(response.results)},
//      catch:(e) => {console.log(e)}
//       });

//   function printUsers(users){
//       console.log(users)
//       for(user of users){
//           console.log(user.name.first+ " "+user.name.last)
//           console.log(user.email)
//       }
//   }
// const url ='https://randomuser.me/api/?results=5'

// fetch('https://randomuser.me/api/?results=5')
// .then(response => response.json())
// // .then(data => console.log(data))
// .then(data=>printUsers(data.results))
// .catch(e => {console.log(e)})


// function printUsers(users){
//           console.log(users)
//           for(user of users){
//               console.log(user.name.first+ " "+user.name.last)
//               console.log(user.email)
//           }
//       }

// async  function getData(){
//     let repsonse = await fetch('https://randomuser.me/api/?results=5&nat=au')
//     let data = await repsonse.json()
//     printUsers(data.results)
// }
// getData()
// function printUsers(users){
//           console.log(typeof (JSON.stringify(users)))
//         //   for(user of users){
//         //       console.log(user.name.first+ " "+user.name.last)
//         //       console.log(user.email)
//         //   }
//       }
function getData(){
      fetch('https://randomuser.me/api/?results=5')
.then(response => response.json())
// .then(data => console.log(data))
.then(data=>printUsers(data.results))
.catch(e => {console.log(e)})
}
getData()

const userContainer = document.querySelector("#users")
function createUser(user){
    let userDiv =document.createElement("div")
    let userEmail= document.createElement("p")

    userEmail.innerText =user.email
    userDiv.appendChild(userEmail)
    userContainer.appendChild(userDiv)

    let userName=document.createElement("h3")
    userName.innerText =user.name.first+ " "+user.name.last
    userDiv.appendChild(userName)

    let userImage = document.createElement("img")
    userImage.src= user.picture.medium
    userDiv.appendChild(userImage)
}
function printUsers(users){
              console.log(users)
             userContainer.innerText = ""
              for(user of users){
                  console.log(user.name.first+ " "+user.name.last)
                  createUser(user)
                  console.log(user.email)
                  console.log(user.picture.medium)
              }
          }
          const showButton = document.getElementById("showUsers")
          showButton.addEventListener('click',getData)