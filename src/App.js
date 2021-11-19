import AdminHome from "Pages/Admin-main/AdminHome";
import Home from "Pages/Home/Home";
import SignIn from "Pages/SignIn/SignIn";
import UserHomePage from "Pages/User-main/UserHomePage";
import { getSiteInfo } from "actions";
import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import { AboutSetup } from "Pages/Home/AboutSetup";
import { Contact } from "Pages/Home/Contact";

class App extends React.Component {
  componentDidMount = async () => {
    this.props.getSiteInfo();
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup">
            <SignIn exact action="signUp" />
          </Route>
          <Route exact path="/signin">
            <SignIn action="signIn" />
          </Route>
          <Route path="/user" component={UserHomePage} />
          <Route path="/about" component={AboutSetup} />
          <Route path="/contact" component={Contact} />
          <Route path="/admin" component={AdminHome} />
          {/* <Route path="/*" component={AdminHome} /> */}
          {/* Replace this with error page later */}
        </Switch>
      </BrowserRouter>
    );
  }
}
export default connect(null, {getSiteInfo})(App)
