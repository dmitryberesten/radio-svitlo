let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;

  // Показати кнопку "Встановити"
  const installBtn = document.getElementById("installBtn");
  installBtn.style.display = "block";

  installBtn.addEventListener("click", () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("Додаток встановлено");
      }
      deferredPrompt = null;
    });
  });
});
