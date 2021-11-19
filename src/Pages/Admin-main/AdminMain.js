import { Switch, Route } from "react-router-dom";
import React from "react";

// Components
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import AdminDashboard from "admin-components/admin-dashboard/AdminDashboard";
import SiteSetting from "admin-components/site-setting/SiteSetting";
import UserList from "admin-components/user-list/UserList";
import CardManagement from "admin-components/card-management/CardManagement";
import LoanManagement from "admin-components/loan-management/LoanManagement";
import KycManagement from "admin-components/kyc-management/KycManagement";

import Security from "components/security/Security";
import Userprofile from "components/user-profile/Userprofile";
import TransferTable from "admin-components/transfer-history/TransferTable";

class AdminMain extends React.Component {
  render() {
  return (
    <div className="user-main-content">
      <Header />
      <div className="user-main">
        <Switch>
          <Route exact path="/admin" component={AdminDashboard} />
          <Route exact path="/admin/userList" component={UserList} />
          <Route exact path="/admin/security" component={Security} />
          <Route exact path="/admin/profile" component={Userprofile} />
          <Route exact path="/admin/site-setting" component={SiteSetting} />
          <Route exact path="/admin/card-manager" component={CardManagement} />
          <Route exact path="/admin/loan-manager" component={LoanManagement} />
          <Route exact path="/admin/kyc-manager" component={KycManagement} />
          <Route exact path="/admin/transfer-history" component={TransferTable} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}
}
export default AdminMain;
