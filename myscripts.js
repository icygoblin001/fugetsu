var text = ["風月堂", "Fugetsu-Do"];
var counter = 0;
var elem = document.getElementById("changeText");
var inst = setInterval(change, 5000);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}
