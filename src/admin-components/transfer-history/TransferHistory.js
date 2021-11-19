import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import "./TransferHistory.css";

class TransactionHistory extends React.Component {
  handleSubmit = async (e) => {
    e.preventDefault();
    const { transaction, user } = this.props;
    const transactionHistory = {
      ...transaction,
      transactionDate: new Date(e.target[0].value + " " + e.target[1].value),
      amount: e.target[2].value,
    };
    await axios({
      method: "patch",
      url: `https://sumex-bank-backend.herokuapp.com/admin/edit/${user.userId._id}`,
      data: {
        transactionHistory,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    this.props.close();
    window.location.reload(false);
  };
  render() {
    const { transaction, user } = this.props;
    return (
      <>
        <div className="transfer-card-background">
          <div className="site-setting transfer-history-card">
            <span id="transfer-close-btn" onClick={this.props.close}>
              <i className="las la-times"></i>
            </span>
            <h2>{user.userId.userName + " " + (user.userId.lastName || "")}</h2>
            <hr />
            <br />
            <form onSubmit={this.handleSubmit}>
              <div className="input-group">
                <div>
                  <label>Transaction Date</label>
                  <div>
                    <input
                      type="date"
                      className="td-input"
                      defaultValue={transaction.transactionDate.slice(0, 10)}
                    />
                  </div>
                </div>
                <div>
                  <label>Transaction Time</label>
                  <div>
                    <input
                      type="time"
                      className="td-input"
                      defaultValue={transaction.transactionDate.slice(11, 16)}
                    />
                  </div>
                </div>
              </div>
              <div className="input-group">
                <div>
                  <label>Transaction Amount</label>
                  <div>
                    <input
                      type="text"
                      className="td-input-am"
                      defaultValue={transaction.amount}
                    />
                  </div>
                </div>
              </div>
              <div className="site-setting-btn">
                <button type="submit">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { ...state };
};
export default connect(mapStateToProps)(TransactionHistory);
