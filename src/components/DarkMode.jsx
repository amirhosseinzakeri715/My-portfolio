import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("darkMode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("darkMode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button onClick={() => setDarkMode(!darkMode)} id="darkModeToggle">
      {darkMode ? "🌞" : "🌙"}
    </button>
  );
};

export default DarkModeToggle;
