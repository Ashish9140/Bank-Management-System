import "./LoanHistory.css";
import React from "react";
class LoanHistory extends React.Component {
  renderLoan = (loan) => {
    return (
      <tr key = {loan._id}>
        <td>{loan.date.slice(0, 10)}</td>
        <td>{loan.date.slice(11, 16)}</td>
        <td>{loan.loanAmount}</td>
        <td>{loan.interest}%</td>
        <td>{loan.time} months</td>
        <td>{loan.loanApproved ? "Approved" : "Pending"}</td>
      </tr>
    );
  };
  render() {
    return (
      <div className="loan-history-scrolled">
        <div className="loan-history">
          <h2>Loan History</h2>
          <hr />
          <table id="customers">
            <thead>
              <tr>
                <th>Apply Date</th>
                <th>Apply Time</th>
                <th>Laon Amount</th>
                <th>Loan Interest</th>
                <th>Time Period</th>
                <th>Loan Status</th>
              </tr>
            </thead>
            <tbody>
              {this.props.loans.map((loan) => this.renderLoan(loan))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default LoanHistory;
