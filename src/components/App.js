import React, { useContext } from "react";
import Header from "./Header";
import Profile from "./Profile";
import { Themecontext } from "../context/theme";

import { UserProvider } from "../context/user"


function App() {
  const { theme } = useContext(Themecontext);
  
  return (
    <main className={theme}>
      <UserProvider>
        <Header />
        <Profile />
      </UserProvider>
    </main>
  );
}

export default App;
