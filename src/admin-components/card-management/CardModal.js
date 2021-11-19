import axios from "axios";
import React from "react";

class CardModal extends React.Component {
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!["active", "dormant", "suspend"].includes(e.target[1].value)) {
        throw new Error("Not valid account state");
      }
      const changes = {
        accountBal: e.target[0].value,
        accountStatus: e.target[1].value,
      };
      await axios({
        method: "patch",
        url: `https://sumex-bank-backend.herokuapp.com/admin/edit/${this.props.user.userId._id}`,
        data: {
          ...changes,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      window.location.reload(false);
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    const { user } = this.props;
    return (
      <div>
        <div className="profile-modal">
          <div className="close-modal" onClick={this.props.close}>
            <i className="las la-times"></i>
          </div>

          <div className="static-group">
            <div>
              <label>First Name</label>
              <div className="static-group-vec">{user.userId.userName}</div>
            </div>
            <div>
              <label>Last Name</label>
              <div className="static-group-vec">
                {user.userId.lastName || "Not uploaded"}
              </div>
            </div>
          </div>

          <div className="static-group">
            <div>
              <label>Account Number</label>
              <div className="static-group-vec">{user._id}</div>
            </div>
            <div>
              <label>Card Number</label>
              <div className="static-group-vec">
                {user.cardInfo.cardNo ? user.cardInfo.cardNo : "None"}
              </div>
            </div>
          </div>

          <div className="static-group">
            <div>
              <label>Email</label>
              <div className="static-group-vec">{user.userId.email}</div>
            </div>
            <div>
              <label>Residencial Address</label>
              <div className="static-group-vec">
                {user.userId.address || "Not uploaded"}
              </div>
            </div>
          </div>

          <div className="static-group">
            <div>
              <label>Date Of Birth</label>
              <div className="static-group-vec">
                {user.userId.dob
                  ? user.userId.dob.slice(0, 10)
                  : "Not uploaded"}
              </div>
            </div>
            <div>
              <label>Gender</label>
              <div className="static-group-vec">
                {user.userId.gender || "Not uploaded"}
              </div>
            </div>
          </div>

          <div className="static-group">
            <div>
              <label>City/Town</label>
              <div className="static-group-vec">
                {user.userId.city || "Not uploaded"}
              </div>
            </div>
            <div>
              <label>State</label>
              <div className="static-group-vec">
                {user.userId.state || "Not uploaded"}
              </div>
            </div>
          </div>

          <div className="static-group">
            <div>
              <label>Country</label>
              <div className="static-group-vec">
                {user.userId.country || "Not uploaded"}
              </div>
            </div>
            <div>
              <label>Zip/Post Code</label>
              <div className="static-group-vec">
                {user.userId.postalCode || "Not uploaded"}
              </div>
            </div>
          </div>

          <form onSubmit={this.handleSubmit}>
            <div className="input-group">
              <div>
                <label>Account Balance</label>
                <div>
                  <input
                    type="text"
                    required="required"
                    defaultValue={user.accountBal}
                  />
                </div>
              </div>
              <div>
                <label>Account Status</label>
                <div>
                  <input
                    type="text"
                    required="required"
                    defaultValue={user.accountStatus}
                  />
                </div>
              </div>
            </div>
            <div className="profile-modal-btn">
              <button type="submit">Save</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CardModal;
