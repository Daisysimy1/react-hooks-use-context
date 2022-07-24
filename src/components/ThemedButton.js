import React, { useContext } from "react";
import { Themecontext } from "../context/theme"

function ThemedButton({ ...props }) {
  const { theme } = useContext(Themecontext)
  
  return <button className={theme} {...props} />;
}

export default ThemedButton;
