import AdminMain from "Pages/Admin-main/AdminMain";
import { AdminSidebar } from "admin-components/admin-sidebar/Sidebar";
import { getUser } from "actions";
import "./style-admin.css";

import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";

class AdminHome extends React.Component {
  componentDidMount() {
    console.log("mounted");
    if (!this.props.userInfo.user && !localStorage.getItem('token')) {
      this.props.history.push('/signup')
    } else if (!this.props.userInfo.user && localStorage.getItem('token')) {
      this.props.getUser(localStorage.getItem('token'), this.props.history);
    }
  }
  renderPage = () => {
    if (!this.props.userInfo.user || (this.props.userInfo.user && this.props.userInfo.user.isAdmin)) {
      return (
        <div id="user-home-page-wrapper">
        <AdminSidebar />
        <AdminMain />
      </div>
       )
    } else {
      this.props.history.push("/user")
      return <h4>LOADING</h4>
     }
   }
  render() {
    return (
      this.renderPage()
    );
  }
}

const mapStateToProps = (state) => {
  return { ...state };
};
export default connect(mapStateToProps, { getUser })(withRouter(AdminHome));
