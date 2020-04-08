// declare both forms as global vars
const form = document.querySelector("#form");
const formResult = document.querySelector("#form-result");
console.log(form.childNodes[1].childNodes[1].value);
// starting programm with the sumbit of the form
form.addEventListener("submit", function init(e){
  if(form.childNodes[1].childNodes[3].value === "") {
    alert("Put a temperature please");
  } else {
    document.querySelector("img").style.display = "block";

    setTimeout(showResult, 1500);
  }
  
  e.preventDefault();
});

function showResult() {
  document.querySelector("img").style.display = "none";
    if(form.childNodes[1].childNodes[1].value === "C") {
      formResult.children[1].value = ((parseFloat(form.childNodes[1].childNodes[3].value) * 9/5) + 32).toFixed(2);
      formResult.children[0].textContent = "°F";
    }
    if(form.childNodes[1].childNodes[1].value === "F") {
      formResult.children[1].value = ((parseFloat(form.childNodes[1].childNodes[3].value) - 32) * 5/9).toFixed(2);
      formResult.children[0].textContent = "°C";
    }
}

console.log(formResult.children);