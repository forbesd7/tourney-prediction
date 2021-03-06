import React from "react";
import "./App.css";
import { MainContainer } from "./components/MainContainer";
import { UserProvider } from "./providers/UserProvider";
import { CreatedTournamentProvider } from "./providers/CreatedTournamentProvider";
import { Switch, Route } from "react-router-dom";
import { ProfilePage } from "./components/ProfilePage/ProfilePage";
import { Navbar } from "./components/Navbar";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
import { Tournaments } from "./components/Tournaments/Tournaments";
import { CreateTournamentContainer } from "./components/CreateTournament/CreateTournamentContainer";
import { PredictableTournamentContainer } from "./components/PredictableTournament/PredictableTournamentContainer";
import { ThemeProvider } from "styled-components";
import { theme } from "./styled-components/theme";
import ViewablePrediction from "./components/ViewablePrediction/ViewablePrediction";
import { TournamentResults } from "./components/TournamentResults/TournamentResults";
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <UserProvider>
          <CreatedTournamentProvider>
            <Navbar />
            <Switch>
              <Route path="/profile/:id" component={ProfilePage}></Route>
              <Route path="/signIn" component={SignIn}></Route>
              <Route path="/signUp" component={SignUp}></Route>
              <Route path="/home" component={SignUp}></Route>
              <Route path="/tournaments" component={Tournaments}></Route>
              <Route
                path="/tournament-results/:tournamentId"
                component={TournamentResults}
              ></Route>
              <Route
                path="/prediction/:predictionId/:tournamentId"
                component={ViewablePrediction}
              ></Route>
              <Route
                path="/tournament/:id"
                component={PredictableTournamentContainer}
              ></Route>
              <Route
                path="/createTournament"
                component={CreateTournamentContainer}
              ></Route>
              <Route
                path="/results/:tournamentId"
                component={TournamentResults}
              ></Route>
              <MainContainer />
            </Switch>
          </CreatedTournamentProvider>
        </UserProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
