import React from "react";
import axios from "axios";

import "./KycManagement.css";
import CardModal from "admin-components/card-management/CardModal";

class KycManagement extends React.Component {
  state = { users: [], open: false };

  getApplications = async () => {
    const userList = await axios({
      method: "get",
      url: "https://sumex-bank-backend.herokuapp.com/admin/users",
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    const applications = userList.data.filter(
      (user) => user.userId.idCard && !user.userId.idInfo.idVerified
    );
    this.setState({ users: applications });
  };

  renderUser = (user) => {
    const handleBtn = async () => {
      const originalInfo = user.userId.idInfo;
      const changes = {
        idInfo: {
          ...originalInfo,
          idVerified: true,
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
        <td>
          <div className="kyc-img">
            <img
              src={`https://sumex-bank-backend.herokuapp.com/user/idCard/${user.userId._id}`}
              alt="loading"
            />
          </div>
        </td>
        <td>
          <div className="profile-dropdown">
            <button
              type="submit"
              className="card-manager-btn"
              onClick={handleBtn}
            >
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
  }; // renderUser ends here

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
    }
    return (
      <div className="kyc-scrolled">
        <div className="kyc-manager">
          <h2>Kyc Requests</h2>
          <hr />
          <table id="customers">
            <thead>
              <tr>
                <th>User Name</th>
                <th>Account Number</th>
                <th>Kyc Document</th>
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
  }; //renderPage ends

  componentDidMount = async () => {
    this.getApplications();
  };

  render() {
    return <>{this.renderPage()}</>;
  }
}

export default KycManagement;

/* */
