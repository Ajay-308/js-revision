import React from "react"
import { UserProvider } from "./context/useContext.jsx"
import { Home } from "./Home"
import { Login } from "./Login.jsx"

function App() {


  return (
    <UserProvider user={"ajay"}>
      <Home />
      <Login />
    </UserProvider>
  )
}

export default App
