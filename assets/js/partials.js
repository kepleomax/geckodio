async function loadPartial(slotId, url) {
  const slot = document.getElementById(slotId);
  if (!slot) return;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Не удалось загрузить ${url} (${response.status})`);
    }
    slot.outerHTML = await response.text();
    document.dispatchEvent(
      new CustomEvent("partial:loaded", { detail: { slotId, url } })
    );
  } catch (error) {
    console.error("[partials] Ошибка загрузки:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadPartial("header-slot", "partials/header.html");
});
