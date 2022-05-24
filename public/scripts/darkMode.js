if (
  localStorage.getItem("micheeDarkMode") === "true" ||
  (!("micheeDarkMode" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
