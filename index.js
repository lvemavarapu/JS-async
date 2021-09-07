let alertButton = document.querySelector("#showAlert")

alertButton.addEventListener('click', ()=>{
    setTimeout(()=>alert("ALERT IS SHOWN AFTER THE TIMER !!"), 5000)
})