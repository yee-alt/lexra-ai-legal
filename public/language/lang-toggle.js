(function () {
  var STORAGE_KEY = "site_lang";
  var DEFAULT_LANG = "en";

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    applyLang(lang);
    updateToggleState(lang);
  }

  function applyLang(lang) {
    document.documentElement.setAttribute("lang", lang === "zh" ? "zh-CN" : "en");

    var textNodes = document.querySelectorAll("[data-i18n-en][data-i18n-zh]");
    textNodes.forEach(function (el) {
      el.textContent = el.getAttribute(lang === "zh" ? "data-i18n-zh" : "data-i18n-en");
    });

    var placeholders = document.querySelectorAll("[data-i18n-placeholder-en][data-i18n-placeholder-zh]");
    placeholders.forEach(function (el) {
      el.setAttribute(
        "placeholder",
        el.getAttribute(lang === "zh" ? "data-i18n-placeholder-zh" : "data-i18n-placeholder-en")
      );
    });
  }

  function updateToggleState(lang) {
    var enBtn = document.getElementById("langBtnEn");
    var zhBtn = document.getElementById("langBtnZh");
    if (!enBtn || !zhBtn) return;
    enBtn.classList.toggle("active", lang === "en");
    zhBtn.classList.toggle("active", lang === "zh");
  }

  function mountToggle() {
    if (document.getElementById("langToggle")) return;
    var wrap = document.createElement("div");
    wrap.id = "langToggle";
    wrap.innerHTML =
      '<button id="langBtnEn" type="button">EN</button>' +
      '<button id="langBtnZh" type="button">中文</button>';
    document.body.appendChild(wrap);

    document.getElementById("langBtnEn").addEventListener("click", function () { setLang("en"); });
    document.getElementById("langBtnZh").addEventListener("click", function () { setLang("zh"); });
  }

  function mountStyle() {
    if (document.getElementById("langToggleStyle")) return;
    var style = document.createElement("style");
    style.id = "langToggleStyle";
    style.textContent =
      "#langToggle{position:fixed;right:12px;bottom:12px;z-index:9999;display:flex;gap:6px;background:rgba(10,10,10,.75);padding:6px;border:1px solid rgba(255,255,255,.2);backdrop-filter:blur(8px)}" +
      "#langToggle button{border:1px solid rgba(255,255,255,.25);background:transparent;color:#fff;font:500 11px/1.1 sans-serif;padding:7px 10px;cursor:pointer}" +
      "#langToggle button.active{background:#fff;color:#000}" +
      "@media (max-width:600px){#langToggle{right:8px;bottom:8px}#langToggle button{padding:6px 8px;font-size:10px}}";
    document.head.appendChild(style);
  }

  document.addEventListener("DOMContentLoaded", function () {
    mountStyle();
    mountToggle();
    var lang = getLang();
    applyLang(lang);
    updateToggleState(lang);
  });
})();
