let btn = document.querySelector("button");
btn.addEventListener("click",function(){
    let h3 = document.querySelector("h3");
    let dusraColor = randomColor();
    h3.innerText = dusraColor;
    
    let div = document.querySelector("div")
    div.style.backgroundColor = dusraColor;

   console.log("generate random color");
});

function randomColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
  let color =(`rgb(${red},${green},${blue})`);
 return color;
}