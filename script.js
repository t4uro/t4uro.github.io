var css = document.querySelector("h3");
var input1 = document.querySelector(".color1");
var input2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var onLoad = "linear-gradient( to right, " + input1.value + ", " + input2.value + " )";



function setGradient() {
	body.style.background = "linear-gradient( to right, " + input1.value + ", " + input2.value + " )";
	css.textContent = body.style.background + ";";
}

function setCSS() {
	css.textContent = onLoad;
}


	
input1.addEventListener("input", setGradient);

input2.addEventListener("input", setGradient);






