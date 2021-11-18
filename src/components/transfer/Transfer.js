import React from "react";
import { connect } from "react-redux";
import { transactionUpdate } from "actions";
import { withRouter } from "react-router-dom";
import "./Transfer.css";
import Alert from "components/modals/Alert";

class Transfer extends React.Component {
  state = { accNo: null, input: null, bank: null, transfer: null, message: "" };

  constructor(props) {
    super(props);
    this.callRef = React.createRef();
  }

  handleAccNo = async (e) => {
    if (this.state.bank !== "Own Bank Transfer") {
      await this.setState({ accNo: e.target.value });
    } else {
      await this.setState({ accNo: this.props.account._id });
    }
    e.target.value = this.state.accNo;
  };

  handleSelect = async (e) => {
    let newState;
    if (e.target.value === "Own Bank Transfer") {
      newState = { accNo: this.props.account._id, bank: e.target.value };
      this.callRef.current.value = this.props.account._id;
    } else {
      newState = { accNo: null, bank: e.target.value };
      this.callRef.current.value = null;
    }
    await this.setState(newState);

    e.target.value = this.state.bank;
  };

  handleInput = async (e) => {
    await this.setState({ input: e.target.value });
    e.target.value = this.state.input;
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const bank = e.target[0].value;
      if (this.props.account.accountStatus !== "active") {
        throw new Error(`Your account is ${this.props.account.accountStatus}`);
      }
      if (bank === "Select Bank for Transfer") {
        throw new Error("Select Bank type!!");
      }

      const findBal = (type, amount, account) => {
        console.log(type);
        if (type === "deposit") {
          account.accountBal += amount;
        } else if (type === "withdraw" && amount < account.accountBal) {
          account.accountBal -= amount;
        } else if (type === "withdraw" && amount > account.accountBal) {
          throw new Error("Insufficient balance");
        }
        return account.accountBal;
      };

      const transaction = {
        transactionType: bank === "Own Bank Transfer" ? "deposit" : "withdraw",
        bankType:
          bank === "Own Bank Transfer"
            ? "own"
            : bank === "Other Bank Transfer"
            ? "other"
            : "international",
        accNo: e.target[1].value,
        amount: e.target[2].value,
        finalBal: findBal(
          bank === "Own Bank Transfer" ? "deposit" : "withdraw",
          parseInt(e.target[2].value),
          this.props.account
        ),
        transactionDate: new Date(),
      };

      await this.props.transactionUpdate(transaction);
      this.setState({ transfer: "success", message: "Transfer done" });
    } catch (e) {
      this.setState({ transfer: "error", message: e.message });
    }
  };

  render() {
    return (
      <>
        {this.state.transfer ? (
          <Alert status={this.state.transfer} message={this.state.message} />
        ) : null}
        <div className="transfer">
          <h2>Transfer Amount</h2>
          <hr />

          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Select Type</label>
              <div>
                <select
                  name="bankType"
                  id="bankType"
                  onChange={this.handleSelect}
                  required
                >
                  <option>Select Bank for Transfer</option>
                  <option>Own Bank Transfer</option>
                  <option>Other Bank Transfer</option>
                  <option>International Wire Transfer</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>Account Number</label>
              <div>
                <input
                  type="text"
                  onChange={this.handleAccNo}
                  ref={this.callRef}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label>Amount</label>
              <div>
                <input type="number" onChange={this.handleInput} required />
              </div>
            </div>

            <div className="transfer-btn">
              <button type="submit">Transfer</button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { account: { ...state.userInfo.account } };
};
export default connect(mapStateToProps, { transactionUpdate })(
  withRouter(Transfer)
);
