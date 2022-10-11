window.addEventListener("load", setThemeOnLoad);

function handleTheme() {
  let body = document.querySelector("body");
  if (body.classList.contains("theme-light")) {
    localStorage.setItem("theme", "dark");
    body.classList.remove("theme-light");
    body.classList.add("theme-dark");
  } else {
    localStorage.setItem("theme", "light");
    body.classList.remove("theme-dark");
    body.classList.add("theme-light");
  }
}
function setThemeOnLoad() {
  let body = document.querySelector("body");

  if (localStorage.getItem("theme") === "dark") {
    body.classList.remove("theme-light");
    body.classList.add("theme-dark");
  } else if (localStorage.getItem("theme") === "light") {
    body.classList.remove("theme-dark");
    body.classList.add("theme-light");
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
  } else {
    body.classList.remove("theme-dark");
    body.classList.add("theme-light");
    localStorage.setItem("theme", "light");
  }
}
