import React from "react";
import { connect } from "react-redux";
import { updateKyc, updateUserProfile } from "actions";
import "./Kyc.css";
import Alert from "components/modals/Alert";

class Kyc extends React.Component {
  state = { status: null, message: null };
  handleSubmit = async (e) => {
    e.preventDefault();
    const kyc = e.target[1].files[0];
    await this.props.updateKyc(kyc);
    const idInfo = {
      idType: e.target[0].value,
      idVerified: false,
    };
    try {
      await this.props.updateUserProfile({ idInfo });
      this.setState({ status: "success", message: "Update Successful" });
    } catch (e) {
      this.setState({ status: "error", message: e.message });
    }
    console.log(this.props);
  };
  renderPage = (user) => {
    if (user && user.idCard) {
      if (user.idInfo.idVerified) {
        return <h1>Your id is verified</h1>;
      }
      return <h1>Application Pending</h1>;
    }
    return (
      <>
        <ul>
          <li>Please upload any of the following personal document.</li>
          <li>The document has not expired.</li>
          <li>
            There is no light glaring, watermark or otherwise obscurity on any
            part of your ID.
          </li>
          <li>The document formats are in (JPG, JPEG or PNG)</li>
        </ul>
        <form onSubmit={this.handleSubmit} className="form-components">
          <select name="idType" id="idType" required>
            <option>Passposrt</option>
            <option>National ID</option>
            <option>Driving License</option>
          </select>
          <input type="file" required />
          <button type="submit">Sumbit</button>
        </form>
      </>
    );
  };
  render() {
    return (
      <>
        {this.props.error.message || this.state.status === "error" ? (
          <Alert
            status="error"
            message={this.props.error.message || this.state.message}
          />
        ) : this.state.status === "success" ? (
          <Alert status="success" message={this.state.message} />
        ) : null}
        <div className="kyc">
          <h2>Identity Verification</h2>
          <hr />
          {this.renderPage(this.props.userInfo.user)}
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return { ...state };
};
export default connect(mapStateToProps, { updateKyc, updateUserProfile })(Kyc);
