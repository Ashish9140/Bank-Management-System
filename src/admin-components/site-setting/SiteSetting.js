import "./SiteSetting.css";
import React from "react";
import { connect } from "react-redux";

class SiteSetting extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="site-setting">
        <h2>Site Settings</h2>
        <hr />
        <form>
          <div className="input-group">
            <div>
              <label>Mail From Address</label>
              <div>
                <input type="email" required="required" />
              </div>
            </div>
            <div>
              <label>Site Title/Name</label>
              <div>
                <input type="text" required="required" />
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
                  value="Future of world"
                />
              </div>
            </div>
            <div>
              <label>Site Working Address</label>
              <div>
                <input type="text" required="required" />
              </div>
            </div>
          </div>
          <div className="input-profile">
            <label>Choose Favicon</label>
            <div>
              <input type="file" required="required" />
            </div>
          </div>
          <div className="input-group">
            <div>
              <label>Account Activation Fee</label>
              <div>
                <input type="text" required="required" value="$3500" />
              </div>
            </div>
          </div>
          <div className="site-setting-btn">
            <button type="submit">Save Changes</button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { ...state };
};
export default connect(mapStateToProps)(SiteSetting);
