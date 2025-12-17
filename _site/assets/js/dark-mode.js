const toggleButton = document.getElementById("theme-toggle");

if (toggleButton) {
  const currentTheme = localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : null;
  
  if (currentTheme) {
    document.documentElement.classList.add(currentTheme);
  
    if (currentTheme === "dark-mode") {
      toggleButton.querySelector("i").classList.remove("fa-moon");
      toggleButton.querySelector("i").classList.add("fa-sun");
    }
  }
  
  toggleButton.addEventListener("click", function () {
    const isDarkMode = document.documentElement.classList.contains("dark-mode");
    
    if (isDarkMode) {
      document.documentElement.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
      toggleButton.querySelector("i").classList.remove("fa-sun");
      toggleButton.querySelector("i").classList.add("fa-moon");
    } else {
      document.documentElement.classList.add("dark-mode");
      localStorage.setItem("theme", "dark-mode");
      toggleButton.querySelector("i").classList.remove("fa-moon");
      toggleButton.querySelector("i").classList.add("fa-sun");
    }
  });
}
