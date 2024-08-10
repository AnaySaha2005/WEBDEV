(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })
  const navbaricon=document.querySelector('.navbar-toggler')
  navbaricon.addEventListener("click",()=>{
    navbar=document.querySelector(".navbar");
    if(navbaricon.className==="navbar-toggler"){
    navbar.style.height="8rem";
    console.dir(navbaricon.className==="navbar-toggler");
    }
   else navbar.style.height="4rem";
    navbar.style.transitionDuration="1s"
   
  })