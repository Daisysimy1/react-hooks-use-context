import React, { useContext } from "react";
import { Themecontext } from "../context/theme";

function DarkModeToggle() {
  const [ theme, setTheme ] = useContext(Themecontext)
  
  function handleToggleTheme(e) {
    setTheme(e.target.checked ? "dark" : "light");
  }
  return (
    <label>
      Dark Mode
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={handleToggleTheme}
      />
    </label>
  );
}

export default DarkModeToggle;
