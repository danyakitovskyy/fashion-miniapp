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
