const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const realFileBtn = document.getElementById('real-file')
const btn = document.getElementById('btnFile')

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
});

btn.addEventListener("click", (event)=>{
  realFileBtn.click();
});

realFileBtn.addEventListener("change", (event) => {
  console.log(event)
  if(realFileBtn.value){
    customTxt.innerHTML=realFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
  }
  else{
    customTxt.innerHTML="No file chosen yet."
  }
})