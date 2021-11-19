import React from "react";
import { connect } from "react-redux";
import { transactionUpdate } from "actions";
import "./Confirmation.css";
import Alert from "./Alert";

class TransferMoney extends React.Component {
  state = { success: false };
  handleTransfer = async () => {
    const transactionData = {
      transactionType: "withdraw",
      bankType: "admin",
      accNo: "admin account",
      amount: this.props.siteInfo.initialFees || 1500,
      finalBal: -(this.props.siteInfo.initialFees || 1500),
      transactionDate: new Date(),
    };
    await this.props.transactionUpdate(transactionData);
    this.setState({ success: "Transfer Complete" });
  };
  renderPage = () => {
    return (
      <div id="confirmation-modal-background">
        <div id="confirmation-modal">
          <div className="confirmation-icon">
            <i className="notification__icon fas fa-exclamation-circle"></i>
          </div>
          <div className="confirmation-message">
            <div className="confirmation-heading">Account Activation Fees</div>
            <br />
            For a new account you will have to pay $
            {this.props.siteInfo.initialFees || 1500} as account activation fees
            to the bank.
          </div>

          <div className="confirmation-buttons">
            <button className="delete-confirm" onClick={this.handleTransfer}>
              Transfer
            </button>
          </div>
        </div>
      </div>
    );
  };
  render() {
    return (
      <>
        {this.state.success ? (
          <Alert status="success" message={this.state.success} />
        ) : this.renderPage()}
      </>
    );
  }
}
const mapStateToProps = (props) => {
  return { ...props };
};
export default connect(mapStateToProps, { transactionUpdate })(TransferMoney);
