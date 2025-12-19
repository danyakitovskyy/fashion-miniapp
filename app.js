const tg = window.Telegram.WebApp;

// Расширяем окно на весь экран
tg.expand();

// Можно получить данные пользователя
console.log("User:", tg.initDataUnsafe?.user);

// Настройка кнопки Telegram (опционально)
tg.MainButton.setText("Сохранить в избранное");
tg.MainButton.show();

tg.MainButton.onClick(() => {
  tg.showAlert("Добавлено в избранное ⭐");
});
