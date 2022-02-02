const light = document.getElementById("light");
const text = document.getElementById("message");
const lightA = document.getElementById("one");
const lightB = document.getElementById("two");
const lightC = document.getElementById("three");
const lightD = document.getElementById("four");
const lightE = document.getElementById("five");
const lightOff = document.getElementById("off");

lightA.onclick = function onA() {
  light.setAttribute("src", "/images/light/light_1.jpg");
  text.innerText = "Light1";
};

lightB.onclick = function onB() {
  light.setAttribute("src", "/images/light/light_2.jpg");
  text.innerText = "Light2";
};

lightC.onclick = function onC() {
  light.setAttribute("src", "/images/light/light_3.jpg");
  text.innerText = "Light3";
};
lightD.onclick = function onD() {
  light.setAttribute("src", "/images/light/light_4.jpg");
  text.innerText = "Light4";
};
lightE.onclick = function onE() {
  light.setAttribute("src", "/images/light/light_5.jpg");
  text.innerText = "Light5";
};
lightOff.onclick = function oFF() {
  light.setAttribute("src", "/images/light/light_0.jpg");
  text.innerText = "Light Off";
};
