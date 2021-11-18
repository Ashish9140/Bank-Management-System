import React from "react";
import { connect } from "react-redux";
import "./TransactionHistory.css";

class TransactionHistory extends React.Component {
  renderTransaction = (transaction) => {
    return (
      <tr key={transaction._id}>
        <td>{transaction.transactionDate.toString().slice(0,10)}</td>
        <td>{transaction.transactionType}</td>
        <td>{transaction.bankType} bank</td>
        <td>{transaction.accNo}</td>
        <td>{transaction.amount}</td>
        <td>{transaction.finalBal}</td>
      </tr>
    );
  };
  render() {
    return (
      <div className="transaction-scrolled">
        <div className="transaction-history">
          <h2>Transaction History</h2>
          <hr />
          <table id="customers">
            <thead>
              <tr>
                <th>Date</th>
                <th>Transaction Type</th>
                <th>Transfer Type</th>
                <th>Account Number</th>
                <th>Amount</th>
                <th>Final Balance</th>
              </tr>
            </thead>
            <tbody>
              {this.props.userInfo.user
                ? this.props.userInfo.account.transactionHistory.map((account) =>
                    this.renderTransaction(account)
                  )
                : null}
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
