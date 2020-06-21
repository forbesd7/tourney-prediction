import React, { useContext, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { ProfilePage } from "./ProfilePage";
import { PasswordReset } from "./PasswordReset";
import { UserContext } from "../providers/UserProvider";
import { Navbar } from "./Navbar";

export const MainContainer = () => {
  const { user } = useContext(UserContext);

  return (
    <Fragment>
      <Navbar />
      {user ? (
        <ProfilePage />
      ) : (
        <Router>
          <div>
            <div>
              <Link to="/signUp">Sign Up</Link>
            </div>
            <div>
              <Link to="/signIn">Sign In</Link>
            </div>
            <div>
              <Link to="/passwordReset">Password Reset</Link>
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
      )}
    </Fragment>
  );
};
