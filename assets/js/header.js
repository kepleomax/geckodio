function initHeader() {
  const header = document.querySelector("[data-header]");
  if (!header) return;

  const burger = header.querySelector("[data-burger]");
  const panel = header.querySelector("[data-mobile-panel]");
  if (burger && panel) {
    burger.addEventListener("click", () => {
      const isOpen = panel.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", String(isOpen));
      burger.setAttribute(
        "aria-label",
        isOpen ? "Закрыть меню" : "Открыть меню"
      );
      document.body.classList.toggle("no-scroll", isOpen);
    });
  }
}

document.addEventListener("partial:loaded", (event) => {
  if (event.detail && event.detail.slotId === "header-slot") {
    initHeader();
  }
});
