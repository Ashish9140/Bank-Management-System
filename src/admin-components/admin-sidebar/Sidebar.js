// import { useEffect } from "react";
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const AdminSidebar = ({siteInfo}) => {
  let location = useLocation().pathname;

  return (
    <>
      <input type="checkbox" id="nav-toggle" />
      <div className="sidebar">
        <div className="sidebar-brand">
          <h1>
            <span className="lab la-accusoft"></span> <span>{siteInfo.bankName || "Sumex"}</span>
          </h1>
        </div>
        <div className="sidebar-menu">
          <ul>
            <li>
              <Link
                to="/admin"
                className={location === "/admin" ? "active" : ""}
              >
                <span className="las la-home"></span>
                <span>Admin Dashboard</span>
              </Link>
            </li>

            <li>
              <Link
                to="/admin/userList"
                className={location === "/admin/userList" ? "active" : ""}
              >
                <span className="lar la-file-excel"></span>
                <span>Users</span>
              </Link>
            </li>

            <li>
              <Link
                to="/admin/profile"
                className={location === "/admin/profile" ? "active" : ""}
              >
                <span className="lar la-user-circle"></span>
                <span>Admin Profile</span>
              </Link>
            </li>

            <li>
              <Link
                to="/admin/card-manager"
                className={location === "/admin/card-manager" ? "active" : ""}
              >
                <span className="lar la-credit-card"></span>
                <span>Card Management</span>
              </Link>
            </li>

            <li>
              <Link
                to="/admin/loan-manager"
                className={location === "/admin/loan-manager" ? "active" : ""}
              >
                <span className="las la-clipboard-list"></span>
                <span>Loan Management</span>
              </Link>
            </li>

            <li>
              <Link
                to="/admin/kyc-manager"
                className={location === "/admin/kyc-manager" ? "active" : ""}
              >
                <span className="las la-shield-alt"></span>
                <span>KYC Management</span>
              </Link>
            </li>

            <li>
              <Link
                to="/admin/security"
                className={location === "/admin/security" ? "active" : ""}
              >
                <span className="las la-bolt"></span>
                <span>Security</span>
              </Link>
            </li>

            <li>
              <Link
                to="/admin/transfer-history"
                className={location === "/admin/transfer-history" ? "active" : ""}
              >
                <span className="lar la-file-excel"></span>
                <span>Transaction History</span>
              </Link>
            </li>

            <li>
              <Link
                to="/admin/site-setting"
                className={location === "/admin/site-setting" ? "active" : ""}
              >
                <span className="las la-bolt"></span>
                <span>Site Setting</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {...state}
}
export default connect(mapStateToProps)(AdminSidebar)