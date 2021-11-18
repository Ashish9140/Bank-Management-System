import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import "./TransferHistory.css";

class TransactionHistory extends React.Component {
  state = { users: [] };
  getUsers = async () => {
    const userList = await axios({
      method: "get",
      url: "http://localhost:3001/admin/users",
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    this.setState({ users: userList.data });
  };
  componentDidMount = async () => {
    this.getUsers();
    };
    renderUser = (user, transaction) => {
        return (
            <tr key={transaction._id}>
              <td>{transaction.transactionDate.slice(0, 10)}</td>
              <td>{transaction.transactionDate.slice(11, 16)}</td>
              <td>{user._id}</td>
              <td>{user.userId.userName}</td>
              <td>{transaction.transactionType}</td>
              <td>${transaction.bankType}</td>
              <td>${transaction.amount}</td>
              <td>${transaction.finalBal}</td>
            </tr>
        )
    }
  render() {
    console.log(this.state.users);
    return (
      <div className="transaction-scrolled">
        <div className="transaction-history">
          <h2>Transaction History</h2>
          <hr />
          <table id="customers">
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Account Number</th>
                <th>User Name</th>
                <th>Transaction Type</th>
                <th>Transfer Type</th>
                <th>Amount</th>
                <th>Final Balance</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((user) =>
                user.transactionHistory.length > 0
                  ? user.transactionHistory.map((transaction) =>
                      this.renderUser(user, transaction)
                    )
                  : null
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { ...state };
};
export default connect(mapStateToProps)(TransactionHistory);
