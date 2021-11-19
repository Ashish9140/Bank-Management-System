import "./SiteSetting.css";
import { updateSiteInfo } from "actions";
import Alert from "components/modals/Alert";
import React from "react";
import { connect } from "react-redux";

class SiteSetting extends React.Component {
  state = { status: null, message: null };
  handleSubmit = async (e) => {
    e.preventDefault();
    let updatedData = {};
    try {
      for (let i = 0; i < e.target.length - 1; i++) {
        let change = e.target[i];
        updatedData[change.id] = change.value;
      }
      await this.props.updateSiteInfo(updatedData);
      this.setState({status: "success", message: "Changes successful"})
    } catch (e) {
      this.setState({ status: "error", message: e.message });
    }
  };
  render() {
    const { siteInfo } = this.props;
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
        <div className="site-setting">
          <h2>Site Settings</h2>
          <hr />
          <form onSubmit={this.handleSubmit}>
            <div className="input-group">
              <div>
                <label>Mail From Address</label>
                <div>
                  <input
                    type="email"
                    required="required"
                    id="adminEmail"
                    defaultValue={siteInfo.adminEmail}
                  />
                </div>
              </div>
              <div>
                <label>Bank Name</label>
                <div>
                  <input
                    type="text"
                    required="required"
                    id="bankName"
                    defaultValue={siteInfo.bankName}
                  />
                </div>
              </div>
            </div>
            <div className="input-group">
              <div>
                <label>Tagline</label>
                <div>
                  <input
                    type="text"
                    required="required"
                    id="tagLine"
                    defaultValue={siteInfo.tagLine}
                  />
                </div>
              </div>
              <div>
                <label>Account Activation Fee</label>
                <div>
                  <input
                    type="text"
                    required="required"
                    id="initialFees"
                    defaultValue={siteInfo.initialFees}
                  />
                </div>
              </div>
            </div>
            <div className="input-group">
              <div>
                <label>Address</label>
                <div>
                  <input
                    type="text"
                    required="required"
                    id="address"
                    defaultValue={siteInfo.address}
                  />
                </div>
              </div>
              <div>
                <label>Phone number</label>
                <div>
                  <input
                    type="number"
                    required="required"
                    id="number"
                    defaultValue={siteInfo.number}
                  />
                </div>
              </div>
            </div>
            <div className="site-setting-btn">
              <button type="submit">Save Changes</button>
            </div>
          </form>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return { ...state };
};
export default connect(mapStateToProps, { updateSiteInfo })(SiteSetting);
