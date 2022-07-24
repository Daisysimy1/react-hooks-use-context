import React, { useState } from "react";

// create the context
const UserContext = React.createContext();

// create a provider component
function UserProvider({ children }) {

  const [user, setUser] = useState(null)

  // const currentUser = {
  //   name: "Duane",
  //   interests: ["coding", "Biking", "Words ending in 'ing"],
  // }
  return <UserContext.Provider value={{user, setUser}}>{ children }</UserContext.Provider>
}


export { UserContext, UserProvider}