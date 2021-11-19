import React from "react";
import axios from "axios";

import LoanModal from "./LoanModal";
import "./LoanManagement.css";
import { LoanCalculator } from "components/loan-calculator/LoanCalculator";

class LoanManagement extends React.Component {
  state = { users: [], open: false };
  getApplications = async () => {
    const userList = await axios({
      method: "get",
      url: "https://sumex-bank-backend.herokuapp.com/admin/users",
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });

    this.setState({ users: userList.data });
  };
  renderUser = (user, loan) => {
    const handleBtn = async () => {
      loan = { ...loan, loanApproved: true };
      await axios({
        method: "patch",
        url: `https://sumex-bank-backend.herokuapp.com/admin/edit/${user.userId._id}`,
        data: {
          loanHistory: loan,
          accountBal: user.accountBal + loan.loanAmount,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      this.getApplications();
    };
    return (
      <tr key={loan._id}>
        <td>{user.userId.userName}</td>
        <td>{user._id}</td>
        <td>{loan.loanAmount}</td>
        <td>{loan.interest}</td>

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
                onClick={() => this.setState({ open: { user, loan } })}
              >
                Check Loan Form<i className="las la-angle-double-right"></i>
              </button>
            </div>
          </div>
        </td>
      </tr>
    );
  }; // render user

  renderPage = () => {
    if (this.state.open) {
      return (
        <LoanModal
          user={this.state.open.user}
          loan={this.state.open.loan}
          close={() => {
            this.setState({ open: false });
          }}
        />
      );
    }
    return (
      <div className="loan-scrolled">
        <div className="loan-manager">
          <h2>Loan Requests</h2>
          <hr />
          <table id="customers">
            <thead>
              <tr>
                <th>User Name</th>
                <th>Account Number</th>
                <th>Loan Amount</th>
                <th>Loan Interest</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((user) =>
                user.loanHistory
                  ? user.loanHistory.map((loan) =>
                      loan.loanApproved ? null : this.renderUser(user, loan)
                    )
                  : null
              )}
            </tbody>
          </table>
        </div>
        <LoanCalculator />
      </div>
    );
  };
  componentDidMount = () => {
    this.getApplications();
  };
  render() {
    return <>{this.renderPage()}</>;
  }
}

export default LoanManagement;
