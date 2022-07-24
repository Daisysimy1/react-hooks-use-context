import React, { useState } from "react";

const Themecontext = React.createContext()

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark")

  return (
    <Themecontext.Provider value={{theme, setTheme}}>{ children }</Themecontext.Provider>
  )
}

export { Themecontext, ThemeProvider }