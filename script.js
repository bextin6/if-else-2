var animals = ["borf borf", "I'm a fish", "I'm a cat", "I'm a shark", "I'm a cat", "borf borf"];
var text = "";
var i;
for (i = 0; i < animals.length; i++) {
  text += animals[i] + "<br>";
}
document.querySelector(".condition").innerHTML = text;