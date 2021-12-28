const h1 = document.querySelector(".catchName h1");

function handleTitleClick(){
  h1.style.color = "green";
  console.log("changed color.");
}

function handleMouseEnter(){
  h1.innerText = "mouse is here.";
  console.log("mouse enter");
}

function handleMouseLeave(){
  h1.innerText = "mouse is gone!";
  h1.style.color = "black";
  console.log("mouse leave!");
}
function handleWindowResize(){
  document.body.style.backgroundColor = "tomato";
}

h1.onclick = handleTitleClick;
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);


window.addEventListener("resize", handleWindowResize);