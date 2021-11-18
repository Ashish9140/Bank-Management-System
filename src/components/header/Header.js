import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import avatar from "../../assets/avatar.jpg";
import "./Headerdrop.css";

class Header extends React.Component {
  state = {
    header: false,
  };
  headerdrop = () => {
    if (!this.state.header) {
      this.setState({ header: true });
    } else {
      this.setState({ header: false });
    }
  };
  handleLogout = async () => {
    await axios({
      method: "delete",
      url: "http://localhost:3001/user",
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    localStorage.removeItem("token");
    window.location.reload(false);
  };
    render() {
      const { user } = this.props.userInfo;
      const location = this.props.location.pathname.split("/")[1];
    return (
      <>
        <div className="user-header">
          <h2>
            <label htmlFor="nav-toggle">
              <span className="las la-bars"></span>
            </label>
            Dashboard
          </h2>
          <div className="user-wrapper" onClick={this.headerdrop}>
            <img
              src={
                user
                  ? user.profilePic
                    ? `http://localhost:3001/user/pfp/${user._id}`
                    : avatar
                  : avatar
              }
              alt="user"
              width="40px"
              height="40px"
            />
          </div>
        </div>
        <div
          className={`${
            this.state.header === false ? "headerdrop" : "showheader"
          }`}
        >
          <h3>{user ? user.userName : "User name"}</h3>
          <ul>
            <li>
              <Link to={`/${location}/profile`}>Profile</Link>
            </li>
            <li>
              <Link to={`/${location}/security`}>Change Password</Link>
            </li>
            <li onClick={this.handleLogout}>
              <Link to="/">Log Out</Link>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { ...state };
};
export default connect(mapStateToProps)(withRouter(Header));
