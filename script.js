(() => {
  const body = document.body;
  const toggle = document.getElementById("theme-toggle");

  const applyTheme = (mode) => {
    const isDark = mode === "dark";
    body.classList.toggle("theme-dark", isDark);
    body.classList.toggle("theme-light", !isDark);
    toggle.setAttribute("aria-pressed", String(isDark));
    toggle.querySelector(".icon").textContent = isDark ? "☾" : "☀";
    toggle.querySelector(".label").textContent = isDark ? "Dark" : "Light";
    localStorage.setItem("theme", mode);
  };

  const stored = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(stored || (prefersDark ? "dark" : "light"));

  toggle.addEventListener("click", () => {
    const next = body.classList.contains("theme-dark") ? "light" : "dark";
    applyTheme(next);
  });
})();
