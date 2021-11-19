import "./UserList.css";
import CardModal from "admin-components/card-management/CardModal";
import Confirmation from "components/modals/Confirmation";
import React from "react";
import axios from "axios";

class UserList extends React.Component {
  state = { open: false, users: [], delete: null, status: null };

  getUsers = async () => {
    const userList = await axios({
      method: "get",
      url: "https://sumex-bank-backend.herokuapp.com/admin/users",
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    this.setState({ users: userList.data });
  };
  componentDidMount = async () => {
    this.getUsers();
  };
  renderUser = (user) => {
    const handleCheckbox = async (e) => {
      let accountStatus;
      if (!e.target.checked) {
        accountStatus = "active";
      } else {
        accountStatus = e.target.id;
      }
      await axios({
        method: "patch",
        url: `https://sumex-bank-backend.herokuapp.com/admin/edit/${user.userId._id}`,
        data: {
          accountStatus,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      this.setState({ status: e.target.id });
      this.getUsers();
    };
    return (
      <tr key={user.userId._id}>
        <td>{user.userId.userName + " " + (user.userId.lastName || "")}</td>
        <td>{user._id}</td>
        <td className="kyc-veri">
          {user.userId.idInfo && user.userId.idInfo.idVerified ? "Yes" : "No"}
        </td>
        <td className="user-actions">
          <div className="profile-dropdown">
            <div>
              Put Dormant{" "}
              <input
                type="checkbox"
                name="dormant"
                id="dormant"
                onChange={handleCheckbox}
                defaultChecked={user.accountStatus === "dormant" ? true : false}
              />
            </div>
            <button
              className="go-profile"
              onClick={() => {
                this.setState({ open: user });
              }}
            >
              Check Profile<i className="las la-angle-double-right"></i>
            </button>
          </div>
          <div
            className="close-user"
            onClick={() => {
              this.setState({ delete: user.userId._id });
            }}
          >
            <i className="las la-times"></i>
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
    }
    return (
      <>
        {this.state.delete ? (
          <Confirmation
            id={this.state.delete}
            close={() => this.setState({ delete: null })}
          />
        ) : null}
        <div className="user-list-scrolled">
          <div className="user-list">
            <h2>Users</h2>
            <hr />
            <table id="customers">
              <thead>
                <tr>
                  <th>User Name</th>
                  <th>Account Number</th>
                  <th>Kyc</th>
                  <th>Options</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map((user) => this.renderUser(user))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  };
  render() {
    return <>{this.renderPage()}</>;
  }
}

export default UserList;
