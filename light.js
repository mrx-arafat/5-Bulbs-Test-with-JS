/* Task 1 - write your code here */
const boxImage = document.getElementById("light");
const boxText = document.getElementById("message");

function reset() {
  boxImage.src = "images/light/light_0.jpg";
  boxText.innerHTML = "click button to turn on/off light";
}
reset();

document.getElementById("one").addEventListener("click", onA);
document.getElementById("two").addEventListener("click", onB);
document.getElementById("three").addEventListener("click", onC);
document.getElementById("four").addEventListener("click", onD);
document.getElementById("five").addEventListener("click", onE);
document.getElementById("off").addEventListener("click", oFF);

function onA() {
  /* set image src to be that for light 1, and set message texts to be "light #1 is on"  */
  boxImage.src = "images/light/light_1.jpg";
  boxText.innerHTML = "light #1 is on";
}

/* implement function onB(), onC(), onD(), onE() that are similar to onA() */
function onB() {
  boxImage.src = "images/light/light_2.jpg";
  boxText.innerHTML = "light #2 is on";
}
function onC() {
  boxImage.src = "images/light/light_3.jpg";
  boxText.innerHTML = "light #3 is on";
}
function onD() {
  boxImage.src = "images/light/light_4.jpg";
  boxText.innerHTML = "light #4 is on";
}
function onE() {
  boxImage.src = "images/light/light_5.jpg";
  boxText.innerHTML = "light #5 is on";
}

/* implement function oFF() for switching off the light*/
function oFF() {
  boxImage.src = "images/light/light_0.jpg";
  boxText.innerHTML = "all lights are off";
}
