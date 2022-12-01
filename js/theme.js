window.addEventListener("load", setThemeOnLoad);

function handleTheme() {
  let body = document.querySelector("body");
  if (body.classList.contains("theme-light")) {
    localStorage.setItem("theme", "dark");
    body.classList.remove("theme-light");
    body.classList.add("theme-dark");
    handleColor("dark");
  } else {
    localStorage.setItem("theme", "light");
    body.classList.remove("theme-dark");
    body.classList.add("theme-light");
    handleColor("light");
  }
}
function setThemeOnLoad() {
  let body = document.querySelector("body");

  if (localStorage.getItem("theme") === "dark") {
    body.classList.remove("theme-light");
    body.classList.add("theme-dark");
    handleColor("dark");
  } else if (localStorage.getItem("theme") === "light") {
    body.classList.remove("theme-dark");
    body.classList.add("theme-light");
    handleColor("light");
  } else {
    setThemeDevice();
  }
}
function setThemeDevice() {
  const theme = window.matchMedia("(prefers-color-scheme: dark)");
  let body = document.querySelector("body");

  if (theme.matches) {
    body.classList.remove("theme-light");
    body.classList.add("theme-dark");
    localStorage.setItem("theme", "dark");
    handleColor("dark");
  } else {
    body.classList.remove("theme-dark");
    body.classList.add("theme-light");
    localStorage.setItem("theme", "light");
    handleColor("light");
  }
}
function handleColor(theme) {
  if (theme === "light") {
    document.body.style.setProperty("--text-primary", "black");
    document.body.style.setProperty("--bg-main", "hsl(212, 45%, 77%)");
    document.body.style.setProperty("--text-input", "hsl(218, 44%, 12%)");
    document.body.style.setProperty(
      "--placeholder-input",
      "hsl(218, 44%, 12%)"
    );
    document.body.style.setProperty("--bg-input", "hsl(218, 44%, 99%)");
    document.body.style.setProperty("--bg-button", "hsl(218, 44%, 99%)");
  } else {
    document.body.style.setProperty("--text-primary", "white");
    document.body.style.setProperty("--bg-main", "hsl(218, 44%, 12%)");
    document.body.style.setProperty("--text-input", "hsl(218, 44%, 99%)");
    document.body.style.setProperty(
      "--placeholder-input",
      "hsl(218, 44%, 99%)"
    );

    document.body.style.setProperty("--bg-button", "hsl(218, 44%, 30%)");
    document.body.style.setProperty("--bg-input", "hsl(218, 44%, 12%)");
  }
}
