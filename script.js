const root = document.documentElement;
const toggle = document.getElementById("theme-toggle");

const stored = localStorage.getItem("theme");
if (stored) {
  root.setAttribute("data-theme", stored);
  toggle.textContent = stored === "dark" ? "☀️" : "🌙";
}

toggle.addEventListener("click", () => {
  const isDark = getComputedStyle(root).colorScheme === "dark" ||
    root.getAttribute("data-theme") === "dark" ||
    (!root.getAttribute("data-theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);

  const next = isDark ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  toggle.textContent = next === "dark" ? "☀️" : "🌙";
});
