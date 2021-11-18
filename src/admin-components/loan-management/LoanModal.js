import React from "react";

class LoanModal extends React.Component {
  render() {
    const { user, loan } = this.props;
    return (
      <>
        <div class="profile-modal">
          <div className="close-modal">
            <i class="las la-times" onClick={this.props.close}></i>
          </div>

          <div class="static-group">
            <div>
              <label>First Name</label>
              <div class="static-group-vec">{user.userId.userName}</div>
            </div>
            <div>
              <label>Last Name</label>
              <div class="static-group-vec">{user.userId.lastName}</div>
            </div>
          </div>

          <div class="static-group">
            <div>
              <label>Account Number</label>
              <div class="static-group-vec">{user._id}</div>
            </div>
            <div>
              <label>Card Number</label>
              <div class="static-group-vec">
                {user.cardInfo.applicationApproved ? user.userId._id : "None"}
              </div>
            </div>
          </div>

          <div class="static-group">
            <div>
              <label>Email</label>
              <div class="static-group-vec">{user.userId.email}</div>
            </div>
            <div>
              <label>Date Of Birth</label>
              <div class="static-group-vec">{user.userId.dob.slice(0, 10)}</div>
            </div>
          </div>

          <div class="static-group">
            <div>
              <label>Gender</label>
              <div class="static-group-vec">{user.userId.gender}</div>
            </div>
            <div>
              <label>Residencial Address</label>
              <div class="static-group-vec">{user.userId.address}</div>
            </div>
          </div>

          <div class="static-group">
            <div>
              <label>City/Town</label>
              <div class="static-group-vec">{user.userId.city}</div>
            </div>
            <div>
              <label>State</label>
              <div class="static-group-vec">{user.userId.state}</div>
            </div>
          </div>

          <div class="static-group">
            <div>
              <label>Country</label>
              <div class="static-group-vec">{user.userId.country}</div>
            </div>
            <div>
              <label>Zip/Post Code</label>
              <div class="static-group-vec">{user.userId.postalCode}</div>
            </div>
          </div>

          <div class="static-group">
            <div>
              <label>Occupation</label>
              <div class="static-group-vec">{user.userId.occupation}</div>
            </div>
            <div>
              <label>Annual Income</label>
              <div class="static-group-vec">${user.userId.annualIncome}</div>
            </div>
          </div>

          <div class="static-group">
            <div>
              <label>Amount</label>
              <div class="static-group-vec">${loan.loanAmount}</div>
            </div>
            <div>
              <label>Interest</label>
              <div class="static-group-vec">{loan.interest}</div>
            </div>
          </div>

          <div class="static-group">
            <div>
              <label>Time</label>
              <div class="static-group-vec">{loan.time}</div>
            </div>
            <div>
              <label>Loan Purpose</label>
              <div class="static-group-vec">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                  value={loan.purpose}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LoanModal;
