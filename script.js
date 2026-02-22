document.addEventListener("DOMContentLoaded", () => {
  const langPicker = document.getElementById("language-picker");

  langPicker.addEventListener("change", (e) => {
    const selectedLang = e.target.value;
    const translatableElements = document.querySelectorAll("[data-en]");

    translatableElements.forEach((el) => {
      el.textContent = el.getAttribute(`data-${selectedLang}`);
    });
    const logo = document.getElementsByClassName("logo-wrapper")[0];
    Array.from(logo.classList).forEach((className) => {
      if (className.startsWith("lang-")) {
        logo.classList.remove(className);
      }
    });
    logo.classList.add(`lang-${selectedLang}`);
  });
});
