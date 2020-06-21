import React from "react";
import "./App.css";
import { MainContainer } from "./components/MainContainer";
import { UserProvider } from "./providers/UserProvider";
function App() {
  return (
    <div className="App">
      <UserProvider>
        <MainContainer />
      </UserProvider>
    </div>
  );
}

export default App;
