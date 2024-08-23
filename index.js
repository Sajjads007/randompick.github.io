console.time()
let number = document.getElementById("number");
let button = document.getElementById("click");
let box = document.getElementById("box");
let dbbutton = document.getElementById("dbclick");
let click = document.getElementById("change");
number.style.cssText = "background:red; height:40px; display:flex; align-items:center; justify-content:center;"
myfunction = () => {
  number.innerText = Math.random();
  box.style.background = "green";
};
click.addEventListener("click", myfunction);
button.addEventListener("click", () => {
    click.removeEventListener("click", myfunction);
    box.style.background = "blue";
});
dbbutton.addEventListener("click", () => {
  click.addEventListener("click", myfunction);
});
console.timeEnd()