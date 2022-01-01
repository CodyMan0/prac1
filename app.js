const loginForm = document.querySelector(".form");
const loginInput = document.querySelector(".form input");


function onLoginSubmit(imper){
  imper.preventDefault();
  console.log(loginInput.value);  
}


loginForm.addEventListener("submit",onLoginSubmit);
