const hourInputDebut = document.getElementById("hour-debut");
const minuteInputDebut = document.getElementById("minute-debut");
const hourInputFin = document.getElementById("hour-fin");
const minuteInputFin = document.getElementById("minute-fin");

const boutton = document
  .querySelector(".calcule")
  .addEventListener("click", () => {
    hourInputDebut.value;
    minuteInputDebut.value;
    hourInputFin.value;
    minuteInputFin.value;

    document.querySelector(".heure-calcule").innerHTML =
      `Total Time ` + calculateTime();
  });

function calculateTime() {
  let hours = hourInputFin.value - hourInputDebut.value;
  if (hours < 0) hours += 24;

  let minutes = minuteInputFin.value - minuteInputDebut.value;
  if (minutes < 0) {
    minutes += 60;
    hours -= 1;
  }

  return hours + "h:" + minutes + "m";
}
