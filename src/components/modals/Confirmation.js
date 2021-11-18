import axios from "axios";
import React from "react";
import "./Confirmation.css";
class Confirmation extends React.Component {
  handleDeleteUser = async () => {
    await axios({
      method: "delete",
      url: `http://localhost:3001/admin/delete/${this.props.id}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    window.location.reload(false);
  };
  render() {
    return (
      <div id="confirmation-modal-background">
        <div id="confirmation-modal">
          <span id="confirmation-close-btn" onClick={this.props.close}>
            &times;
          </span>
          <div className="confirmation-icon">
            <i className="notification__icon fas fa-exclamation-circle"></i>
          </div>
          <div className="confirmation-message">
            <div className="confirmation-heading">Delete user?</div>
            <br />
            The user and their account will be permanently deleted from the
            database.
          </div>
          <div className="confirmation-buttons">
            <button className="delete-confirm" onClick={this.handleDeleteUser}>
              Delete
            </button>
            <button className="cancel-confirm" onClick={this.props.close}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Confirmation;
