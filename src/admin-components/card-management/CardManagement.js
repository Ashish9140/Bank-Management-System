import { connect } from "react-redux";
import React from "react";
import axios from "axios";
import "./CardManagement.css";
import CardModal from "./CardModal";
class CardManagement extends React.Component {
  state = { users: [], open: false };
  getApplications = async () => {
    const userList = await axios({
      method: "get",
      url: "https://sumex-bank-backend.herokuapp.com/admin/users",
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    const applications = userList.data.filter(
      (user) => user.cardInfo.cardApplied && !user.cardInfo.applicationApproved
    );
    this.setState({ users: applications });
  };
  componentDidMount = async () => {
    this.getApplications();
  };
  renderUser = (user) => {
    const handleBtn = async (e) => {
      const originalInfo = user.cardInfo;
      const changes = {
        cardInfo: {
          ...originalInfo,
          applicationApproved: true,
          cardNo: user.userId._id,
        },
      };
      await axios({
        method: "patch",
        url: `https://sumex-bank-backend.herokuapp.com/admin/edit/${user.userId._id}`,
        data: {
          ...changes,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      this.getApplications();
    };
    return (
      <tr key={user.userId._id}>
        <td>{user.userId.userName + " " + (user.userId.lastName || "")}</td>
        <td>{user._id}</td>
        <td>{user.cardInfo.cardType}</td>
        <td>{user.cardInfo.cardBrand}</td>
        <td>
          <div className="profile-dropdown">
            <button className="card-manager-btn" onClick={handleBtn}>
              Accept Request
            </button>
            <div>
              <button
                className="go-profile"
                onClick={() => {
                  this.setState({ open: user });
                }}
              >
                Check Profile<i className="las la-angle-double-right"></i>
              </button>
            </div>
          </div>
        </td>
      </tr>
    );
  };

  renderPage = () => {
    if (this.state.open) {
      return (
        <CardModal
          user={this.state.open}
          close={() => {
            this.setState({ open: false });
          }}
        />
      );
    } else {
      return (
        <div className="card-scrolled">
          <div className="card-manager">
            <h2>Card Requests</h2>
            <hr />
            <table id="customers">
              <thead>
                <tr>
                  <th>User Name</th>
                  <th>Account Number</th>
                  <th>Card Type</th>
                  <th>Card Brand</th>
                  <th>Options</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map((user) => this.renderUser(user))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  };
  render() {
    return <>{this.renderPage()}</>;
  }
}

export default connect(null)(CardManagement);
