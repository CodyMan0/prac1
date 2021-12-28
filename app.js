const title = document.querySelector(".catchName h1");

function handleTitleClick(){
  title.style.color = "green";
  console.log("changed color.");
}

function handleMouseEnter(){
  title.innerHTML = "mouse is here.";
  console.log("mouse enter");
}

function handleMouseLeave(){
  title.innerHTML = "mouse is gone!";
  console.log("mouse leave!");
}

title.addEventListener("click" , handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);



// 위에 보이는 코드가 제대로 실행 되지가 않음. 
// 뭐가 잘못 된지 모르겠다...
// console.log 실행시에는 잘 작동함.
// 해결 -> innertext가 아니라 innerHTML로 하니깐 변환됨.. 
// why?? : 