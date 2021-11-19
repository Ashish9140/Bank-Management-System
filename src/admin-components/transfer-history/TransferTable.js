import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import "./TransferTable.css";
import TransferHistory from "./TransferHistory";

class TransferTable extends React.Component {
  state = { users: [], open: null, transaction: null, user: null };
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
  renderUser = (user, transaction) => {
    return (
      <tr key={transaction._id}>
        <td>{user.userId.userName + " " + (user.userId.lastName || "")}</td>
        <td>{user._id}</td>
        <td>
          <input
            type="date"
            className="td-input"
            defaultValue={transaction.transactionDate.slice(0, 10)}
            readOnly
          />
        </td>
        <td>
          <input
            type="time"
            className="td-input"
            defaultValue={transaction.transactionDate.slice(11, 16)}
            readOnly
          />
        </td>
        <td>
          {transaction.bankType}({transaction.transactionType})
        </td>
        <td>
          <input
            type="text"
            className="td-input-am"
            defaultValue={transaction.amount}
            readOnly
          />
        </td>
        <td>${transaction.finalBal}</td>
        <td>
          <div className="profile-modal-btn">
            <button
              type="submit"
              onClick={(e) => {
                this.setState({ open: true, transaction, user });
              }}
            >
              Edit
            </button>
          </div>
        </td>
      </tr>
    );
  };
  render() {
    return (
      <>
        {this.state.open ? (
          <TransferHistory
            transaction={this.state.transaction}
            user={this.state.user}
            close={() => this.setState({ open: false })}
          />
        ) : null}
        <div className="transfer-admin-scrolled">
          <div className="transfer-admin">
            <h2>Transaction History</h2>
            <hr />
            <table id="customers">
              <thead>
                <tr>
                  <th>User Name</th>
                  <th>Account Number</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Transfer Type</th>
                  <th>Amount</th>
                  <th>Final Balance</th>
                  <th>Save</th>
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
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { ...state };
};
export default connect(mapStateToProps)(TransferTable);
