import React from "react";
import "./alert.css";
class Alert extends React.Component {
  close = () =>
    setTimeout(() => {
      window.location.reload(false);
    }, 2000);

  render() {
    this.close();
    return (
      <div className={`${this.props.status}Alert alert-popUp`}>
        <div className="alert-popUp-body">{this.props.message}</div>
      </div>
    );
  }
}

export default Alert;
