const url='https://randomuser.me/api/?results=10&nat=au'

//  $.ajax({
//             url: 'https://randomuser.me/api/?results=7&nat=us,dk,fr,gb',
//             dataType: 'json',
//             success: (response) =>{printUsers(response.results)},
//               catch:(e) => {console.log(e)} 
            
//           });
    

fetch('https://randomuser.me/api/?results=10&nat=au')
  .then(repsonse => repsonse.json())// returns a promise
//   .then(data => console.log(data))
.then(data=>{printUsers(data.results)})
.catch((e) => {console.log(e)})

     function printUsers(users){
        console.log(users) 
        for(user of users){
            console.log(user.name.first+" "+user.name.last)
            console.log(user.email);
         }
      
        }

      