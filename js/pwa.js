let deferredPrompt;

// Обробка події "beforeinstallprompt"
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;

  // Отримання кнопки установки
  const installButton = document.getElementById("installBtn");
  installButton.style.display = "block"; // Показати кнопку

  // Обробка кліку по кнопці установки
  installButton.addEventListener("click", () => {
    deferredPrompt.prompt(); // Виклик системного діалогу установки

    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("Користувач погодився встановити додаток");
      } else {
        console.log("Користувач скасував установку");
      }
      deferredPrompt = null; // Скинути промпт після використання
    });
  });
});

// Обробка події "appinstalled"
window.addEventListener("appinstalled", () => {
  console.log("Додаток успішно встановлено!");

  // Приховати кнопку після установки
  const installButton = document.getElementById("installBtn");
  installButton.style.display = "none";
});
