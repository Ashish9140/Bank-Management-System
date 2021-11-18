import { Switch, Route } from "react-router-dom";
import React from "react";

// Components
import Dashboard from "components/dashboard/Dashboard";
import Header from "components/header/Header";
import Kyc from "components/kyc/Kyc";
import Security from "components/security/Security";
import Transfer from "components/transfer/Transfer";
import { Footer } from "components/footer/Footer";
import TransactionHistory from "components/transaction-history/TransactionHistory";
import Userprofile from "components/user-profile/Userprofile";
import Usercard from "components/user-card/Usercard";
import Loan from "components/loan/Loan";

class Main extends React.Component {
  render() {
    return (
      <div className="user-main-content">
        <Header />
        <div className="user-main">
          <Switch>
            <Route exact path="/user" component={Dashboard} />
            <Route exact path="/user/transfer" component={Transfer} />
            <Route exact path="/user/history" component={TransactionHistory} />
            <Route exact path="/user/profile" component={Userprofile} />
            <Route exact path="/user/card" component={Usercard} />
            <Route exact path="/user/loan" component={Loan} />
            <Route exact path="/user/kyc" component={Kyc} />
            <Route exact path="/user/security" component={Security} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Main;
