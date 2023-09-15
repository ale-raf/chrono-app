const start = document.querySelector("#start-btn");
const stopBtn = document.querySelector("#stop-btn");
const reset = document.querySelector("#reset-btn");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const milliseconds = document.querySelector(".milliseconds");

let [h, min, sec, ms] = [0, 0, 0, 0];
let time;

start.addEventListener("click", launchChrono);

stopBtn.addEventListener("click", stopChrono);

reset.addEventListener("click", resetChrono);

function updateChrono() {
  ms += 1;

  if (ms === 100) {
    ms = 0;
    sec += 1;
  } else if (sec === 60) {
    sec = 0;
    min += 1;
  } else if (min === 60) {
    min = 0;
    h += 1;
  }

  milliseconds.innerText = ms + "ms";
  seconds.innerText = sec + "s :";
  minutes.innerText = min + "min :";
  hours.innerText = h + "h :";
}

function launchChrono() {
  time = setInterval(updateChrono, 1);

  displayAlertMessage({
    mess: "Chrono's launched !",
    display: "block",
    bg: "greenyellow",
    color: "green",
  });

  start.disabled = true;
  start.style.background = "green";
  start.style.color = "whitesmoke";

  stopBtn.disabled = false;
  stopBtn.style.background = "tomato";
  stopBtn.style.color = "black";
}

function stopChrono() {
  clearInterval(time);

  displayAlertMessage({
    mess: "Chrono has been stopped !",
    display: "block",
    bg: "tomato",
    color: "maroon",
  });

  start.disabled = false;
  start.style.background = "greenyellow";
  start.style.color = "black";

  stopBtn.disabled = true;
  stopBtn.style.background = "red";
  stopBtn.style.color = "whitesmoke";
}

function resetChrono() {
  clearInterval(time);

  displayAlertMessage({ mess: "", display: "none", bg: "", color: "" });

  start.disabled = false;
  start.style.background = "greenyellow";
  start.style.color = "black";

  stopBtn.disabled = true;
  stopBtn.style.background = "tomato";
  stopBtn.style.color = "black";

  (ms = 0), (sec = 0), (min = 0), (h = 0);

  milliseconds.innerText = ms + "ms";
  seconds.innerText = sec + "s :";
  minutes.innerText = min + "min :";
  hours.innerText = h + "h :";
}

function displayAlertMessage({ mess, display, bg, color }) {
  const message = document.querySelector(".alert-message");
  message.innerText = mess;
  message.style.display = display;
  message.style.background = bg;
  message.style.color = color;
}
