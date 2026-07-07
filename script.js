const notify=document.querySelector("#notify");
const email=document.querySelector("#email");
const error=document.querySelector("#error");
notify.addEventListener("click", ()=>{
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email.value)){
        console.log("valid Email");
        error.style.display="none";
        email.classList.remove("error");
    }
    else{
        error.style.display="block";
        email.classList.add("error");
    }

});
