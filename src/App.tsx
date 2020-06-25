import React from "react";
import "./App.css";
import { MainContainer } from "./components/MainContainer";
import { UserProvider } from "./providers/UserProvider";
import { Switch, Route } from "react-router-dom";
import { ProfilePage } from "./components/ProfilePage";
import { Navbar } from "./components/Navbar";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
import { Tournaments } from "./components/Tournaments";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Navbar />
        <Switch>
          <Route path="/profile" component={ProfilePage}></Route>
          <Route path="/signIn" component={SignIn}></Route>
          <Route path="/signUp" component={SignUp}></Route>
          <Route path="/home" component={SignUp}></Route>
          <Route path="/home" component={Tournaments}></Route>
          <MainContainer />
        </Switch>
      </UserProvider>
    </div>
  );
}

export default App;
