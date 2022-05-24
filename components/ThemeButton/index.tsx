import { useState, useEffect } from "react";

export const ThemeButton = () => {
  const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined);
  useEffect(() => {
    setDarkMode(document.documentElement.classList.contains("dark"));
  }, []);
  useEffect(() => {
    if (darkMode) {
      window.document.documentElement.classList.add("dark");
      localStorage.setItem("micheeDarkMode", "true");
    } else {
      window.document.documentElement.classList.remove("dark");
      localStorage.setItem("micheeDarkMode", "false");
    }
  }, [darkMode]);
  const onClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <p onClick={onClick} className="hover:cursor-pointer">
      {darkMode ? "light" : "dark"}
    </p>
  );
};
