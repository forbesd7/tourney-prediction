import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { ProfilePage } from "./ProfilePage";
import { PasswordReset } from "./PasswordReset";

export const MainContainer = () => {
  const user = null;
  return user ? (
    <ProfilePage />
  ) : (
    <Router>
      <div>
        <div>
          <Link to="/signUp">Home</Link>
        </div>
        <div>
          <Link to="/signIn">Home</Link>
        </div>
        <div>
          <Link to="/passwordReset">Home</Link>
        </div>
        <Switch>
          <Route path="/signUp">
            <SignUp />
          </Route>

          <Route path="/signIn">
            <SignIn />
          </Route>

          <Route path="/passwordReset">
            <PasswordReset />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
