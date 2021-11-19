import "./AdminDashboard.css";
import axios from "axios";
import React from "react";
class AdminDashboard extends React.Component {
  state = { users: [] };

  getUsers = async () => {
    const userList = await axios({
      method: "get",
      url: "https://sumex-bank-backend.herokuapp.com/admin/users",
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    this.setState({ users: userList.data });
  };

  totalWithdrawl = () => {
    let amount = 0;
    this.state.users.forEach((user) => {
      user.transactionHistory.forEach((transaction) => {
        if (transaction.transactionType === "withdraw")
          amount += transaction.amount;
      });
    });
    return amount;
  };
  lastTransction = (type) => {
    let amount = 0;
    let recentDate = null;
    if (this.state.users.length > 0) {
      recentDate = this.state.users[0].transactionHistory[0].transactionDate;
    }
    this.state.users.forEach((user) => {
      user.transactionHistory.forEach((transaction) => {
        if (
          transaction.transactionDate > recentDate &&
          transaction.transactionType === type
        ) {
          recentDate = transaction.transactionDate;
          amount = transaction.amount;
        }
      });
    });
    return amount;
  };
  accountStatus = (status) => {
    let activeUsers = 0;
    let inactiveUsers = 0;
    this.state.users.forEach((user) => {
      user.accountStatus === "active" ? activeUsers++ : inactiveUsers++;
    });
    if (status === "active") {
      return activeUsers;
    } else return inactiveUsers;
  };
  componentDidMount = async () => {
    this.getUsers();
  };

  render() {
    return (
      <>
        <div className="cards">
          <div className="card-single">
            <div>
              <span>Total Balance</span>
              <h2>UNLIMITED</h2>
            </div>
            <div>
              <span className="las la-burn"></span>
            </div>
          </div>
          <div className="card-single">
            <div>
              <span>Total Withdrawl</span>
              <h2>${this.totalWithdrawl()}</h2>
            </div>
            <div>
              <span className="las la-burn"></span>
            </div>
          </div>
          <div className="card-single">
            <div>
              <span>Last Withdrawl</span>
              <h2>${this.lastTransction("withdraw")}</h2>
            </div>
            <div>
              <span className="las la-burn"></span>
            </div>
          </div>
          <div className="card-single">
            <div>
              <span>Last Deposite</span>
              <h2>${this.lastTransction("deposit")}</h2>
            </div>
            <div>
              <span className="las la-burn"></span>
            </div>
          </div>
          <div className="card-single">
            <div>
              <span>Total Users</span>
              <h2>{this.state.users.length}</h2>
            </div>
            <div>
              <span className="las la-burn"></span>
            </div>
          </div>
          <div className="card-single">
            <div>
              <span>Active Users</span>
              <h2>{this.accountStatus("active")}</h2>
            </div>
            <div>
              <span className="las la-burn"></span>
            </div>
          </div>
          <div className="card-single">
            <div>
              <span>Inactive Users</span>
              <h2>{this.accountStatus("dormant")}</h2>
            </div>
            <div>
              <span className="las la-burn"></span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AdminDashboard;
