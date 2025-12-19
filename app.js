const tg = window.Telegram.WebApp;
tg.expand();

// Навигация
const buttons = document.querySelectorAll(".bottom-nav button");
const screens = document.querySelectorAll(".screen");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.screen;

    screens.forEach(screen => {
      screen.classList.remove("active");
    });

    document.getElementById(target).classList.add("active");
  });
});

const screenOrder = ["home", "eras", "persons", "archive"];
let currentIndex = 0;

function showScreen(index) {
  if (index < 0 || index >= screenOrder.length) return;

  document.querySelectorAll(".screen").forEach(s =>
    s.classList.remove("active")
  );

  document
    .getElementById(screenOrder[index])
    .classList.add("active");

  currentIndex = index;
}

let startX = 0;
let endX = 0;

document.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

document.addEventListener("touchend", e => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  const diff = startX - endX;

  // минимальная дистанция свайпа
  if (Math.abs(diff) < 50) return;

  if (diff > 0) {
    // свайп влево
    showScreen(currentIndex + 1);
  } else {
    // свайп вправо
    showScreen(currentIndex - 1);
  }
}

document
  .querySelectorAll(".bottom-nav button")
  .forEach((btn, index) => {
    btn.addEventListener("click", () => {
      showScreen(index);
    });
  });

  