const specialMessageBtn = document.getElementById("specialMessageBtn");
const specialMessage = document.getElementById("specialMessage");
const whatsappBtn = document.getElementById("whatsappBtn");


const phoneNumber = "525612733383";

const whatsappMessage =
  "Hola, confirmo mi asistencia al Baby Shower de Neriel.  💙";

const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

whatsappBtn.href = whatsappLink;

specialMessageBtn.addEventListener("click", () => {
  specialMessage.classList.toggle("show");
});
// =====================
// COUNTDOWN
// =====================

// Elementos del DOM
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const countdownFinished = document.getElementById("countdownFinished");
const countdownContainer = document.getElementById("countdown");

// ⚠️ IMPORTANTE: año correcto
const eventDate = new Date(2026, 4, 2, 13, 0, 0); // 

function updateCountdown() {
  const now = new Date();
  const difference = eventDate - now;

  if (difference <= 0) {
    countdownContainer.style.display = "none";
    countdownFinished.textContent = "¡Hoy es el gran día! 💙";
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  daysElement.textContent = days;
  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;
}

// Ejecutar
updateCountdown();
setInterval(updateCountdown, 1000);