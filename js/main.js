document.addEventListener("DOMContentLoaded", () => {
  const editableSections = document.querySelectorAll(".editable");

  editableSections.forEach(section => {
    const key = location.pathname + "-" + section.id;
    const savedContent = localStorage.getItem(key);
    if (savedContent) section.innerHTML = savedContent;

    const status = document.createElement("div");
    status.classList.add("save-status");
    section.insertAdjacentElement("afterend", status);

    section.addEventListener("input", () => {
      localStorage.setItem(key, section.innerHTML);
      status.textContent = "Guardado ✓";
      setTimeout(() => (status.textContent = ""), 1500);
    });
  });
});
