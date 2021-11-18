import AdminHome from "Pages/Admin-main/AdminHome";
import Home from "Pages/Home/Home";
import SignIn from "Pages/SignIn/SignIn";
import UserHomePage from "Pages/User-main/UserHomePage";
import "./App.css"
import React from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
// import { About } from "Pages/Home/About";

const App = () => {
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

        {/* <Route path="/about" component={About} /> */}
        <Route path="/user" component={UserHomePage} />
        <Route path="/admin" component={AdminHome} /> 
        {/* <Route path="/*" component={AdminHome} /> */}
        {/* Replace this with error page later */}
      </Switch>
    </BrowserRouter>
  );
};
export default App;
