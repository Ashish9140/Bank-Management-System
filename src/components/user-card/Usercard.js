import React from "react";
import { connect } from "react-redux";
import { cardApply } from "actions";
import "./Usercard.css";
import Alert from "components/modals/Alert";

class Usercard extends React.Component {
  state = { status: null, message: null };
  handleSubmit = async (e) => {
    e.preventDefault();
    const date = new Date();
    const cardInfo = {
      cardApplied: true,
      applicationApproved: false,
      applicationDate: date,
      cardBrand: e.target[1].value,
      cardType: e.target[2].value,
    };
    await this.props.cardApply(cardInfo);
    this.setState({ status: "success", message: "Application Sent" });
  };
  renderPage = (account) => {
    if (account && account.cardInfo.cardApplied) {
      return (
        <div className="card-details">
          <div className="form-group">
            <span> Card Number: </span>
            <span className="fm-gp">
              {account.cardInfo.applicationApproved
                ? account.userId
                : "Application Pending"}
            </span>
          </div>
          <div className="form-group">
            <span> Account Number:</span>{" "}
            <span className="fm-gp">{account._id}</span>
          </div>
          <div className="form-group">
            <span>Card Brand:</span>{" "}
            <span className="fm-gp">{account.cardInfo.cardBrand}</span>
          </div>
          <div className="form-group">
            <span> Card Type:</span>{" "}
            <span className="fm-gp">{account.cardInfo.cardType}</span>
          </div>
        </div>
      );
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Type Of Account</label>
          <div>
            <select name="account" id="account" required>
              <option>Saving</option>
              <option>Current</option>
              <option>Fixed</option>
              <option>Checking</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label>Card Brand</label>
          <div>
            <select name="cardBrand" id="cardBrand" required>
              <option>Master Card</option>
              <option>Visa Card</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label>Card Type</label>
          <div>
            <select name="cardType" id="cardType" required>
              <option>Credit</option>
              <option>Debit</option>
            </select>
          </div>
        </div>

        <div className="user-card-btn">
          <button type="submit">Apply For Card</button>
        </div>
      </form>
    );
  };

  render() {
    return (
      <>
        {this.state.status ? (
          <Alert status={this.state.status} message={this.state.message} />
        ) : null}
        <div className="user-card">
          <h2>User Card</h2>
          <hr />
          {this.renderPage(this.props.userInfo.account)}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { ...state };
};
export default connect(mapStateToProps, { cardApply })(Usercard);
