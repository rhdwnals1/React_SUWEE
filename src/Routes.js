import React, { Component } from "react";
import SuweeMain from "./Pages/SuweeMain/SuweeMain";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import SignUpPhoneCertify from "./Pages/SignUp/SignUpPhoneCertify/SignUpPhoneCertify";
import PasswordFind from "../src/Pages/SignUp/PasswordFind/PasswordFind";
import PasswordRegister from "../src/Pages/SignUp/PasswordRegister/PasswordRegister";
import Agreement from "../src/Pages/SignUp/Agreement/Agreement";
import Payment from "../src/Pages/Payment/Payment";
import BookDetails from "./Pages/BookDetails/BookDetails";
import LandingPage from "./Pages/LandingPage/LandingPage";
import BookRoom from "./Pages/BookRoom/BookRoom";

class Routes extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signupphone" component={SignUpPhoneCertify} />
            <Route exact path="/password-find" component={PasswordFind} />
            <Route
              exact
              path="/password-register"
              component={PasswordRegister}
            />
            <Route exact path="/agreement" component={Agreement} />
            <Route exact path="/payment" component={Payment} />
            <Route exact path="/SuweeMain" component={SuweeMain} />
            <Route exact path="/detail" component={BookDetails} />
            <Route exact path="/BookRoom" component={BookRoom} />
            <Route exact path="/" component={LandingPage} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default Routes;
