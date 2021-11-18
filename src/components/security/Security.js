import React from "react";
import { connect } from "react-redux";
import { changePassword } from "actions";
import "./Security.css";
import Alert from "components/modals/Alert";

class Security extends React.Component {
  state = { status: null, message: null };
  handleSubmit = async (e) => {
    e.preventDefault();
    if (e.target[1].value === e.target[2].value) {
      await this.props.changePassword({
        oldPassword: e.target[0].value,
        newPassword: e.target[1].value,
      });
      this.setState({status: "success", message: "Password changed!"})
    } else {
      this.setState({status:"error", message: "Error matching passwords"})
    }
    //window.location.reload(false); asdfghjkl
  };
  render() {
    return (
      <>
        {this.state.status === "error" || this.props.error.message ? (
          <Alert
            status="error"
            message={this.props.error.message || this.state.message}
          />
        ) : this.state.status === "success" ? (
          <Alert status="success" message={this.state.message} />
        ) : null}
        <div className="security">
          <h2>Change Password</h2>
          <hr />
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Old Password</label>
              <div>
                <input
                  type="password"
                  placeholder="Old Password"
                  required="required"
                  minLength="8"
                  maxLength="60"
                />
              </div>
            </div>
            <div className="form-group">
              <label>New Password</label>
              <div>
                <input
                  type="password"
                  placeholder="New Password"
                  required="required"
                  minLength="8"
                  maxLength="60"
                />
              </div>
            </div>
            <div className="form-group">
              <label>Confirm New Password</label>
              <div>
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  required="required"
                  minLength="8"
                  maxLength="60"
                />
              </div>
            </div>
            <div className="security-btn">
              <button type="submit">Save</button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

const mapStateToPrps = (state) => {
  return { ...state };
}
export default connect(mapStateToPrps, { changePassword })(Security);
