/* PREDADORES — menu, "ver mais" do FAQ e animação de entrada */
(function () {
  "use strict";

  /* ---------- Menu overlay ---------- */
  var menu = document.getElementById("menu");
  var openBtn = document.querySelector("[data-menu-open]");
  var lastFocus = null;

  function focusables() {
    return menu.querySelectorAll('a[href], button:not([disabled])');
  }

  function openMenu() {
    lastFocus = document.activeElement;
    menu.hidden = false;
    requestAnimationFrame(function () { menu.classList.add("is-open"); });
    document.body.classList.add("menu-open");
    openBtn && openBtn.setAttribute("aria-expanded", "true");
    var f = focusables(); f.length && f[0].focus();
  }

  function closeMenu() {
    menu.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    openBtn && openBtn.setAttribute("aria-expanded", "false");
    setTimeout(function () { menu.hidden = true; }, 350);
    lastFocus && lastFocus.focus();
  }

  if (menu) {
    openBtn && openBtn.addEventListener("click", openMenu);
    menu.querySelector("[data-menu-close]").addEventListener("click", closeMenu);
    menu.addEventListener("click", function (e) {
      if (e.target === menu) closeMenu();                 // clique fora do painel
      if (e.target.closest(".menu__nav a, .menu__panel > .btn")) closeMenu();
    });
    document.addEventListener("keydown", function (e) {
      if (menu.hidden) return;
      if (e.key === "Escape") closeMenu();
      if (e.key === "Tab") {                              // mantém o foco dentro do menu
        var f = focusables(), first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
  }

  /* ---------- FAQ: "ver mais" ---------- */
  var more = document.querySelector("[data-faq-more]");
  if (more) {
    more.addEventListener("click", function () {
      document.querySelectorAll(".faq__item[hidden]").forEach(function (el) { el.hidden = false; });
      more.remove();
    });
    // se alguém chegar por link direto numa pergunta escondida, mostra ela
    if (location.hash) {
      var target = document.querySelector(location.hash);
      if (target && target.hidden) { target.hidden = false; target.scrollIntoView(); }
    }
  }

  /* ---------- Entrada suave dos blocos ---------- */
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.15 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("is-in"); });
  }
})();
