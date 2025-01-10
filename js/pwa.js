// Функція визначення iOS
function isIos() {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(userAgent);
}

// Показати кнопку для iOS
if (isIos()) {
  const addToHomeScreenBtn = document.getElementById("addToHomeScreenBtn");
  const iosInstructions = document.getElementById("iosInstructions");

  // Показати кнопку
  addToHomeScreenBtn.style.display = "block";

  // Клік по кнопці показує інструкцію
  addToHomeScreenBtn.addEventListener("click", () => {
    iosInstructions.style.display = "block";

    // Автоматично приховати інструкцію через 10 секунд
    setTimeout(() => {
      iosInstructions.style.display = "none";
    }, 10000);
  });
} else {
  // Показати кнопку для інших платформ
  const addToHomeScreenBtn = document.getElementById("addToHomeScreenBtn");
  addToHomeScreenBtn.style.display = "block";

  addToHomeScreenBtn.addEventListener("click", () => {
    alert(
      "Цей додаток можна додати на головний екран вручну через опції браузера."
    );
  });
}
