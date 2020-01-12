var form = document.querySelector("form");
var nameInput = document.querySelector("[name=name]");
var weightInput = document.querySelector("[name=weight]");
var emailInput = document.querySelector("[name=email]");
var telInput = document.querySelector("[name=tel]");
var arrayElement = [telInput, emailInput, weightInput, nameInput];

form.addEventListener("submit", function(evt){
  evt.preventDefault();
  for (var element in arrayElement) {
    if (!element.value) {
      element.classList.add("error");
      element.focus();
    }
  }
})
