/**
 * PWA iOS Install Prompt — Radio Svitlo
 * Vanilla JS — no external dependencies
 * Shows only on iPhone Safari when app is NOT already installed as PWA.
 * Dismissed state persists in localStorage for DISMISS_DAYS days.
 */
(function () {
  "use strict";

  var STORAGE_KEY = "pwaIosPromptDismissed";
  var DISMISS_DAYS = 7;
  var SHOW_DELAY_MS = 1800; // slight delay after page load for UX

  /* ── 1. Guard: only iOS (iPhone) ───────────────────────── */
  function isIphone() {
    var ua = navigator.userAgent || "";
    // Match iPhone explicitly; exclude iPad
    return /iPhone/.test(ua) && /AppleWebKit/.test(ua);
  }

  /* ── 2. Guard: not already running as standalone PWA ────── */
  function isStandalone() {
    return (
      navigator.standalone === true ||
      window.matchMedia("(display-mode: standalone)").matches
    );
  }

  /* ── 3. Guard: user has not recently dismissed ──────────── */
  function isDismissed() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return false;
      var until = parseInt(raw, 10);
      return Date.now() < until;
    } catch (_) {
      return false;
    }
  }

  /* ── 4. Persist dismissal ───────────────────────────────── */
  function saveDismissal() {
    try {
      var until = Date.now() + DISMISS_DAYS * 24 * 60 * 60 * 1000;
      localStorage.setItem(STORAGE_KEY, String(until));
    } catch (_) {
      /* storage unavailable — fail silently */
    }
  }

  /* ── 5. Build & inject HTML ─────────────────────────────── */
  function buildPrompt() {
    var el = document.createElement("div");
    el.className = "pwa-ios-prompt";
    el.setAttribute("role", "dialog");
    el.setAttribute("aria-modal", "false");
    el.setAttribute("aria-label", "Встановити додаток Радіо Світло");

    // Share icon SVG (iOS native style)
    var shareIcon =
      '<svg class="pwa-ios-prompt__share-icon" viewBox="0 0 18 20" fill="none" ' +
      'xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      '<path d="M9 1v12M5 5l4-4 4 4" stroke="rgba(10,132,255,0.9)" stroke-width="1.8" ' +
      'stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path d="M2 10v7a1 1 0 001 1h12a1 1 0 001-1v-7" stroke="rgba(10,132,255,0.9)" ' +
      'stroke-width="1.8" stroke-linecap="round"/>' +
      "</svg>";

    el.innerHTML =
      '<div class="pwa-ios-prompt__card">' +
      // Close button
      '<button class="pwa-ios-prompt__close" type="button" ' +
      'aria-label="Закрити підказку встановлення">' +
      '<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      '<line x1="1" y1="1" x2="11" y2="11"/>' +
      '<line x1="11" y1="1" x2="1" y2="11"/>' +
      "</svg>" +
      "</button>" +
      // Header: icon + title
      '<div class="pwa-ios-prompt__header">' +
      '<img class="pwa-ios-prompt__icon" ' +
      'src="./favicon/apple-touch-icon.png" ' +
      'alt="Логотип Радіо Світло" ' +
      'width="52" height="52" ' +
      'loading="lazy">' +
      "<div>" +
      '<p class="pwa-ios-prompt__title">Встановити додаток<br>Радіо Світло</p>' +
      '<p class="pwa-ios-prompt__subtitle">radio-svitlo.github.io</p>' +
      "</div>" +
      "</div>" +
      '<div class="pwa-ios-prompt__divider"></div>' +
      // Description
      '<p class="pwa-ios-prompt__desc">' +
      "Додай Радіо Світло на екран «Додому» для швидкого доступу в один клік." +
      "</p>" +
      // Steps
      '<div class="pwa-ios-prompt__steps">' +
      '<div class="pwa-ios-prompt__step">' +
      '<span class="pwa-ios-prompt__step-num">1</span>' +
      '<span class="pwa-ios-prompt__step-text">' +
      "Натисніть кнопку «Поділитися» " +
      shareIcon +
      " внизу Safari." +
      "</span>" +
      "</div>" +
      '<div class="pwa-ios-prompt__step">' +
      '<span class="pwa-ios-prompt__step-num">2</span>' +
      '<span class="pwa-ios-prompt__step-text">' +
      'Оберіть «<strong style="color:#f2f2f7">Додати на початковий екран</strong>».' +
      "</span>" +
      "</div>" +
      "</div>" +
      // Caret pointing down toward the Safari toolbar
      '<div class="pwa-ios-prompt__caret">' +
      '<svg viewBox="0 0 22 11" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      '<polygon points="0,0 22,0 11,11"/>' +
      "</svg>" +
      "</div>" +
      "</div>";

    return el;
  }

  /* ── 6. Show / hide helpers ─────────────────────────────── */
  function showPrompt(el) {
    // Force a reflow so the transition fires from the hidden state
    el.getBoundingClientRect();
    el.classList.add("pwa-ios-prompt--visible");
  }

  function hidePrompt(el) {
    el.classList.remove("pwa-ios-prompt--visible");
    // Remove from DOM after transition ends
    el.addEventListener("transitionend", function handler() {
      el.removeEventListener("transitionend", handler);
      if (el.parentNode) el.parentNode.removeChild(el);
    });
  }

  /* ── 7. Init ────────────────────────────────────────────── */
  function init() {
    if (!isIphone()) return;
    if (isStandalone()) return;
    if (isDismissed()) return;

    var prompt = buildPrompt();
    document.body.appendChild(prompt);

    // Animate in after slight delay
    setTimeout(function () {
      showPrompt(prompt);
    }, SHOW_DELAY_MS);

    // Close button handler
    var closeBtn = prompt.querySelector(".pwa-ios-prompt__close");
    if (closeBtn) {
      closeBtn.addEventListener("click", function () {
        saveDismissal();
        hidePrompt(prompt);
      });
    }
  }

  /* Run after DOM is ready */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
