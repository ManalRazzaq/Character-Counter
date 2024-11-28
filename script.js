const textarea = document.getElementById('textarea');
const totalChars = document.getElementById('total-char');
const remainChars = document.getElementById('remaining-char');
textarea.addEventListener("keyup" , ()=>{
    // console.log("key is pressed");
    updatecounter();

    
})

// update counter on page load
 updatecounter();
function updatecounter(){
  totalChars.innerText =  textarea.value.length ;
  remainChars.innerText = textarea.getAttribute('maxlength') - textarea.value.length; 
}