let container = document.querySelector(".container");
let text = document.querySelector(".content");
let title = document.querySelector("h3");
let BGmode = document.getElementById("BGmode");
let icon = document.querySelector("i");
let textInp = document.querySelector(".content > div > input");
let showNum = document.querySelector(".content > span");
let changeBgColor = document.querySelector("#backg");

BGmode.addEventListener( "click",function()
{
    if(BGmode.value == 'light')
    {
        container.style.cssText = "background-color:rgb(51 51 51 /80%)";
        text.style.cssText = "color: white";
        title.style.cssText = "color: white";
        BGmode.innerHTML = "<i class='fas fa-sun'>Light Mode</i>";
        BGmode.value = "dark";
    }
    else
    {
        container.style.cssText = "background-color:rgb(227 227 227 / 50%);";
        text.style.cssText = "color: black";
        title.style.cssText = "color: black";
        BGmode.innerHTML = "<i class='fas fa-moon'>Darkmode</i>";
        BGmode.value = "light";
    }
});

textInp.addEventListener( "keyup",function (){
    var textLength = textInp.value.length;
    showNum.textContent = `${textLength}`;
});

changeBgColor.addEventListener("click", function changeBgColor()
{
    var colors = ["#7acb63","#ff3232","#f6ff1f","#498dfc","white"];
    var bodyStyle = document.body.style;
    var randomNum = Math.floor(Math.random() * colors.length);
    console.log();
    bodyStyle.cssText = "background-color: "+colors[randomNum];
});